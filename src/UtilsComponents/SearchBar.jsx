/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== "undefined"
        ? isoCode
              .toUpperCase()
              .replace(/./g, (char) =>
                  String.fromCodePoint(char.charCodeAt(0) + 127397)
              )
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        "& > span": {
            marginRight: 10,
            fontSize: 18,
        },
    },
    root:{
        display:'flex',
        justifyContent:'center',
        marginTop:'2vh'
    }
});

export default function SearchBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState("");
    console.log(props);
    if(!props.options || !props.setValue)
    return "...";
    return (
        <Autocomplete
        className={classes.root}
            id="country-select-demo"
            style={{ width: 250 }}
            options={props.options}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option}
            renderOption={(option) => (
                <React.Fragment>
                    <span>{option}</span>
                </React.Fragment>
            )}
            getOptionSelected={(option, value) => option === value}
            onChange={(event, newValue) => {
                setValue(newValue);
                props.setValue(newValue);
                
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Bitcoin"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

