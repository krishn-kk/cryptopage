import { Typography } from "@material-ui/core";
import React from "react";
import "./NameValue.css";
function NameValue(props) {
    const { name, value } = props;
    return (
        <div className="root">
            <span>
                <Typography variant="subtitle1" className="title">
                    {name}
                </Typography>
            </span>
            <span>
                <Typography
                    variant="h6"
                    className="value"
                    style={{ subtitle2: { fontSize: "1rem" } }}
                >
                    {value}
                </Typography>
            </span>
        </div>
    );
}

export default NameValue;
