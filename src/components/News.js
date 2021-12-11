import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { baseNewsUrl, baseUrl, createUrl } from "../utils/utils";
import CryptoCard from "../UtilsComponents/CryptoCard";
import axios from "axios";
import { Input } from "@material-ui/core";
import NewsCard from "../UtilsComponents/NewsCard";
import "./Crypto.css";
import Spinner from "../UtilsComponents/Spinner";
import SearchBar from "../UtilsComponents/SearchBar";

function News(props) {
    const count = props.count || 12;
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("cryptocurrency");
    const [data, setData] = useState([]);
    const [loadingCat, setLoadingCat] = useState(true);
    useEffect(() => {
        setLoadingCat(true);
        let url = createUrl(baseUrl + `/coins?limit=${100}`, "crypto");
        console.log(url);
        axios.request(url).then((response) => {
            setData(response.data.data.coins);
            console.log(response.data.data);
            setLoadingCat(false);
        });
    }, []);
    useEffect(() => {
        setLoading(false);
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
    }, [category]);
    // console.log(news?.value);
    if (loading || loadingCat) return <Spinner />;
    let options = data.map((data) => data.name);
    // console.log(options);
    // console.log(data);
    const setValue = (value) => setCategory(value);

    return (
        <div>
            {!props?.count ? (
                <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} lg={12} sm={12}>
                        <SearchBar options={options} setValue={setValue} />
                    </Grid>
                </Grid>
            ) : (
                ""
            )}
            {news?.value?.length === 0 ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10vh",
                    }}
                >
                    <span>
                        OOPS SORRY 😞, Please Search Something else didn't found
                        anything.... Thanks, Cheers 🍻
                    </span>
                </div>
            ) : (
                ""
            )}
            {!loading ? (
                <Grid
                    container
                    align="left"
                    spacing={1}
                    direction="row"
                    style={{ marginTop: "1vh" }}
                >
                    {news?.value?.map((news) => (
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
            ) : (
                <Spinner />
            )}
        </div>
    );
}

export default News;
