import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { baseNewsUrl, createUrl } from "../utils/utils";
import CryptoCard from "../UtilsComponents/CryptoCard";
import axios from "axios";
import { Input } from "@material-ui/core";
import NewsCard from "../UtilsComponents/NewsCard";
import "./Crypto.css";
import Spinner from "../UtilsComponents/Spinner";

function News(props) {
    const count = props.count || 12;
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("cryptocurrency");

    useEffect(() => {
        let url = createUrl(
            baseNewsUrl +
                `?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
            "news"
        );
        console.log(url);
        axios.request(url).then((response) => {
            console.log(response.data);
            setNews(response.data);
            setLoading(false);
        });
    }, []);
    console.log(news?.value);
    if (loading) return <Spinner />;
    return (
        <div>
            {/* Search Bar */}
            {/* show all cards */}
            {/* {!props.count && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search"
                        autoFocus
                    />
                </div>
            )} */}
            <Grid
                container
                align="left"
                spacing={1}
                direction="row"
                style={{ marginTop: "1vh" }}
            >
                {news.value.map((news) => (
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                        style={{
                            // width: "10vw",
                            // height: "40vh",
                            boxShadow: "initial",
                        }}
                    >
                        <NewsCard news={news} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default News;
