import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NameValue from "../UtilsComponents/NameValue";
import { baseUrl, createUrl } from "../utils/utils";
import axios from "axios";
import "./Home.css";
import millify from "millify";
import Crypto from "./Crypto";
import CryptoCard from "../UtilsComponents/CryptoCard";
import { Link } from "react-router-dom";
import News from "./News";
import Spinner from "../UtilsComponents/Spinner";

function Home(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let url = createUrl(baseUrl + "/stats", "crypto");
        console.log(url);
        axios.request(url).then((response) => {
            console.log(response);
            setData(response.data.data);
            setLoading(false);
        });
    }, []);
    console.log(data);
    if (loading) return <Spinner />;
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={1} align="left" style={{ flexGrow: "1" }}>
                <Grid item xs={12}>
                    <Typography variant="h4">Global Crypto Stack</Typography>
                </Grid>
                <Grid xs={12}></Grid>
                <Grid xs={12}></Grid>
                <Grid item xs={6} sm={6} lg={6} className="stats_grid">
                    <NameValue
                        name={"Total Coins"}
                        value={millify(data?.totalCoins)}
                    />
                </Grid>
                <Grid item xs={6} sm={6} lg={6} className="stats_grid">
                    <NameValue
                        name={"Total Market"}
                        value={millify(data?.totalMarkets)}
                    />
                </Grid>
                <Grid item xs={6} sm={6} lg={6} className="stats_grid">
                    <NameValue
                        name={"Total Exchange"}
                        value={millify(data?.totalExchanges)}
                    />
                </Grid>
                <Grid item xs={6} sm={6} lg={6} className="stats_grid">
                    <NameValue
                        name={"Total Market Cap"}
                        value={millify(data?.totalMarketCap)}
                    />
                </Grid>
                <Grid item xs={6} sm={6} lg={6} className="stats_grid">
                    <NameValue
                        name={"Total 24H volume"}
                        value={millify(data?.total24hVolume)}
                    />
                </Grid>
            </Grid>
            <div className="crypto_header">
                <div>
                    <Typography variant="h4">
                        Top 10 Cryptocurrencies in the world
                    </Typography>
                </div>
                <Link to="/crypto">
                    <div>Show More</div>
                </Link>
            </div>
            <Crypto count={10} />
            <div className="crypto_header">
                <div>
                    <Typography variant="h4">Latest Crypto News</Typography>
                </div>
                <Link to="/news">
                    <div>Show More News</div>
                </Link>
            </div>
            <News count={6} />
            {/* <CryptoCard /> */}
        </div>
    );
}

export default Home;
