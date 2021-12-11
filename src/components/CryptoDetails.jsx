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
import "./CryptoDetails.css"
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

function CryptoDetails(props) {
    const { coinId } = useParams();
    const [cryptoDetails, setData] = useState([]);
    const [coinHistory, setCoinHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingHis, setLoadingHis] = useState(false);
    const [timeperiod, setTimeperiod] = useState("7d");
    useEffect(() => {
        let url = createUrl(baseUrl + `/coin/${coinId}`, "crypto");
        console.log(url);
        axios.request(url).then((response) => {
            setData(response.data.data.coin);
            setLoading(true);
        });
        url = createUrl(
            baseUrl + `/coin/${coinId}/history/${timeperiod}`,
            "crypto"
        );
        
        console.log(url);
        axios.request(url).then((response) => {
            console.log(response);
            setCoinHistory(response.data.data);
            setLoadingHis(true);
        });
        console.log(coinHistory);
    }, []);

    if (!loading || !loadingHis) return <Spinner/>;
    const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

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
            value: `$ ${millify(cryptoDetails.totalSupply)}`,
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Circulating Supply",
            value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
            icon: <ExclamationCircleOutlined />,
        },
    ];
    console.log(cryptoDetails);
    return (
        <div>
            <Grid container className="coin-detail-container">
                <Grid item xs={12} sm={12} lg={12} className="coin-heading-container">
                    <Typography level={2} className="coin-name">
                        {cryptoDetails.name} ({cryptoDetails.slug}) Price
                    </Typography>
                    <p>
                        {cryptoDetails.name} live price in US Dollar (USD). View
                        value statistics, market cap and supply.
                    </p>
                </Grid>
                <FormControl>
                    <NativeSelect
                        className="select-timeperiod"
                        placeholder="Select Timeperiod"
                        onChange={(value) => setTimeperiod(value)}
                    >
                        {/* <option value="">None</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option> */}
                        {time.map((date) => (
                            <option value={date}>{date}</option>
                        ))}
                    </NativeSelect>
                    {/* <FormHelperText>With visually hidden label</FormHelperText> */}
                </FormControl>
            </Grid>
        </div>
    );
}

export default CryptoDetails;
