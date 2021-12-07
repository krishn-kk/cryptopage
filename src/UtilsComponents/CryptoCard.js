import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";
import millify from "millify";

const useStyles = makeStyles({
    root: {
        // width: "18vw",
        // height: "35vh",
        "&:hover": {
            // background: "red",
            // width: "18.4vw",
            // height: "35.4vh",
            transition: "ease-in-out 0.2s",
            border: "1px solid red",
            boxShadow: "1px grey",
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "8vh",
    },
    header_title: {
        fontWeight: "lighter",
        fontSize: "1.2rem",
        marginLeft: "0.4rem",
    },
});

export default function CryptoCard(props) {
    // const { currency } = props;
    const classes = useStyles();
    // const currency = {
    //     rank: "1",
    //     name: "Bitcoin",
    //     price: 110,
    //     marketCap: 111,
    //     change: 111,
    // };
    const { currency } = props;
    return (
        <Card className={classes.root} variant="outlined">
            <div className={classes.header}>
                <span className={classes.header_title}>
                    {`${currency?.rank}.${currency?.name}`}
                </span>
                <span>
                    <img
                        style={{
                            width: "2rem",
                            height: "2rem",
                            marginRight: "0.4rem",
                        }}
                        src={currency.iconUrl}
                    />
                </span>
            </div>
            <Divider style={{ color: "red" }} />
            <CardContent>
                <p>Price:{millify(currency?.price)}</p>
                <p>Market Cap:{millify(currency?.marketCap)}</p>
                <p>Daily Changes:{millify(currency?.change)}%</p>
            </CardContent>
        </Card>
    );
}
