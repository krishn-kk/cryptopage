import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Collapse from "@material-ui/core/Collapse";
import ReactHtmlParser from "react-html-parser";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import millify from "millify";
import "./Exchange.css";
import { baseUrl, createUrl } from "../utils/utils";
import axios from "axios";
import Spinner from "../UtilsComponents/Spinner";

function Exchange(props) {
    const par = `int: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. Integrate the remote changes 
    (e.g.
    hint: 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.`;
    const [checked, setChecked] = React.useState(0);
    const [exchange, setExchange] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleChange = (index) => {
        setChecked((prev) => !prev);
    };
    useEffect(() => {
        let url = createUrl(baseUrl + "/exchanges", "crypto");
        axios.request(url).then((response) => {
            setExchange(response.data.data.exchanges);
            setLoading(false);
        });
    }, []);
    if (loading) return <Spinner />;
    return (
        <div>
            <Grid container alignItems="center" alignContent="center">
                <Grid item xs={12} sm={3} lg={3}>
                    Exchanges
                </Grid>
                <Grid item xs={0} sm={3} lg={3} className="none">
                    24h Trade Volume
                </Grid>
                <Grid item xs={0} sm={3} lg={3} className="none">
                    Markets
                </Grid>
                <Grid item xs={0} sm={3} lg={3} className="none">
                    Change
                </Grid>
            </Grid>
            <Grid
                className="table_content"
                classes={{
                    "spacing-xs-1": {
                        margin: "40",
                    },
                }}
                direction="column"
            >
                {exchange.map((exchange) => {
                    let collapse = 0;

                    return (
                        <Paper elevation={1}>
                            <Grid
                                container
                                // style={{ background: "red" }}
                                onClick={handleChange}
                                // xs={12}
                                // sm={3}
                                // lg={3}
                                spacing={0}
                                item
                                className="table_row"
                                alignItems="center"
                                alignContent="center"
                                style={{ cursor: "pointer" }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    lg={3}
                                    classes={{
                                        "spacing-xs-1": {
                                            margin: "4px",
                                        },
                                    }}
                                    style={{ height: "10vh" }}
                                >
                                    <div className="header">
                                        <span
                                            className="header_title"
                                            style={{ marginLeft: "0.5rem" }}
                                        >
                                            {exchange?.rank}
                                        </span>
                                        <span
                                            style={{
                                                marginLeft: "0.5rem",
                                                display: "flex",
                                                // alignItems: "center",
                                                // justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "2rem",
                                                    height: "2rem",
                                                    marginRight: "0.4rem",
                                                    alignSelf: "center",
                                                }}
                                                src={exchange.iconUrl}
                                            />
                                        </span>
                                        <span style={{ marginLeft: "0.5rem" }}>
                                            {exchange?.name}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    lg={3}
                                    className="none"
                                >
                                    ${millify(exchange.volume)}
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    lg={3}
                                    className="none"
                                >
                                    {millify(exchange.numberOfMarkets)}
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    lg={3}
                                    className="none"
                                >
                                    {millify(exchange.marketShare)}%
                                </Grid>
                                <Paper elevation={4}>
                                    <Collapse in={checked}>
                                        <Grid>
                                            {ReactHtmlParser(
                                                exchange.description
                                            )}
                                        </Grid>
                                    </Collapse>
                                </Paper>
                            </Grid>
                        </Paper>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Exchange;
