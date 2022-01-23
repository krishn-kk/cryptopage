import React, { useEffect, useState } from "react";
import { baseUrl, createUrl } from "../utils/utils";
import axios from "axios";
// import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./CryptoDetails.css";
import Spinner from "../UtilsComponents/Spinner";
import {
    MoneyCollectOutlined,
    DollarCircleOutlined,
    FundOutlined,
    ExclamationCircleOutlined,
    StopOutlined,
    TrophyOutlined,
    CheckOutlined,
    NumberOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";
import { Grid, Typography } from "@material-ui/core";
import LineChart from "../UtilsComponents/LineChart";
import HTMLReactParser from "html-react-parser";

function CryptoDetails(props) {
    const { coinId } = useParams();
    const [cryptoDetails, setData] = useState([]);
    const [coinHistory, setCoinHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingHis, setLoadingHis] = useState(false);
    const [timeperiod, setTimeperiod] = useState("7d");
    console.log(coinId);
    useEffect(() => {
        let url = createUrl(baseUrl + `/coin/${coinId}`, "crypto");
        axios.request(url).then((response) => {
            setData(response.data.data.coin);
            console.log(response.data.data.coin)
            setLoading(true);
        });
        url = createUrl(
            baseUrl + `/coin/${coinId}/history?${timeperiod}`,
            "crypto"
        );

        axios.request(url).then((response) => {
            setCoinHistory(response);
            console.log(response);
            setLoadingHis(true);
        });
    }, [timeperiod]);

    if (!loading || !loadingHis) return <Spinner />;
    const time = ["24h", "7d", "30d", "1y", "5y"];

    const stats = [
        {
            title: "Price to USD",
            value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
            icon: <DollarCircleOutlined />,
        },
        { title: "Rank", value: cryptoDetails.rank, icon: <NumberOutlined /> },
        {
            title: "24h Volume",
            value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
            icon: <ThunderboltOutlined />,
        },
        {
            title: "Market Cap",
            value: `$ ${
                cryptoDetails.marketCap && millify(cryptoDetails.marketCap)
            }`,
            icon: <DollarCircleOutlined />,
        },
        {
            title: "All-time-high(daily avg.)",
            value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
            icon: <TrophyOutlined />,
        },
    ];

    const genericStats = [
        {
            title: "Number Of Markets",
            value: cryptoDetails.numberOfMarkets,
            icon: <FundOutlined />,
        },
        {
            title: "Number Of Exchanges",
            value: cryptoDetails.numberOfExchanges,
            icon: <MoneyCollectOutlined />,
        },
        {
            title: "Aprroved Supply",
            value: cryptoDetails.approvedSupply ? (
                <CheckOutlined />
            ) : (
                <StopOutlined />
            ),
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Total Supply",
            value: `$ ${millify(cryptoDetails.supply.total)}`,
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Circulating Supply",
            value: `$ ${millify(cryptoDetails.supply.circulating)}`,
            icon: <ExclamationCircleOutlined />,
        },
    ];
    return (
        <div>
            <Grid container className="coin-detail-container">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    className="coin-heading-container"
                    justifyContent="center"
                    alignContent="center"
                >
                    <Typography className="coin-name">
                        {cryptoDetails.name} ({cryptoDetails.slug}) Price
                    </Typography>
                    <p>
                        {cryptoDetails.name} live price in US Dollar (USD).
                        <br /> View value statistics, market cap and supply.
                    </p>
                </Grid>
                <Grid>
                    <FormControl>
                        <NativeSelect
                            className="select-timeperiod"
                            placeholder="Select Timeperiod"
                            onChange={(event) => {
                                // console.log(value.target.value);
                                setTimeperiod(event.target.value);
                            }}
                            defaultValue={"7d"}
                            defaultChecked
                        >
                            {time.map((date) => (
                                <option value={date}>{date}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item container xs={12} lg={12} sm={12}>
                    <Grid className="chart-header" item lg={4} xs={12} sm={12}>
                        <Typography className="chart-title">
                            {cryptoDetails.name} Price Chart{" "}
                            {""}
                        </Typography>
                    </Grid>
                    
                    <Grid
                        className="price-container"
                        item
                        container
                        lg={8}
                        sm={12}
                        xs={12}
                        justifyContent="flex-end"
                    >
                        <Typography level={5} className="price-change">
                            {coinHistory?.data?.data?.change}%
                        </Typography>

                        <Typography level={5} className="current-price">
                            Current {cryptoDetails.name} Price: $
                            {millify(cryptoDetails.price)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={12} sm={12}>
                    {" "}
                    <LineChart
                        coinHistory={coinHistory}
                        currentPrice={millify(cryptoDetails.price)}
                        coinName={cryptoDetails.name}
                    />
                </Grid>
                <Grid container />
                <Grid container item justifyContent="space-around" >
                    <Grid lg={4} xs={12} sm={12} item container className="coin-value-statistics">
                        <Grid item className="coin-value-statistics-heading">
                            <Typography className="coin-details-heading">
                                {`An overview showing the status of ${cryptoDetails.name}`}{" "}
                            </Typography>
                        </Grid>
                        {stats.map(({ title, value, icon }) => {
                            return (
                                <Grid container justifyContent="space-between" className="coin-stats">
                                    <Grid className="coin-stats-name">
                                        {icon} {""} {title}
                                    </Grid>
                                    <Grid className="stats">{value}</Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid lg={1} />
                    <Grid lg={4} xs={12} sm={12} item container className="other-stats-info">
                        <Grid item  className="coin-value-statistics-heading">
                            <Typography className="coin-details-heading">
                                {`An overview showing the status of All cryptocurrencies`}
                            </Typography>
                        </Grid>
                        {stats.map(({ title, value, icon }) => {
                            return (
                                <Grid container justifyContent="space-between" className="coin-stats">
                                    <Grid className="coin-stats-name">
                                        {icon} {""} {title}
                                    </Grid>
                                    <Grid className="stats">{value}</Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid container item className="coin-desc-link">
                    <Grid lg={12} xs={12} sm={12} items className="coin-desc">
                        <Grid  className="coin-details-heading">
                            <Typography>
                                {`What is ${cryptoDetails.name}`}
                            </Typography>
                        </Grid>
                        <Grid>
                            {HTMLReactParser(cryptoDetails.description)}
                        </Grid>
                    </Grid>
                    <Grid lg={3} />
                    {/* <Grid lg={12} xs={12} sm={12} item className="coin-links">
                        <Grid className="coin-details-heading">
                            <Typography>
                                {`${cryptoDetails.name} Links`}
                            </Typography>
                        </Grid>
                        {cryptoDetails.links?.map((link) => (
                            <Grid container  justifyContent="space-around" className="coin-links">
                                
                                <Grid >
                                    <Typography level={5} className="link-name">
                                        {link.type}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {link.name}
                                    </a>
                                </Grid>
                            </Grid>
                        ))}
                        <Grid>
                            {HTMLReactParser(cryptoDetails.description)}
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default CryptoDetails;
