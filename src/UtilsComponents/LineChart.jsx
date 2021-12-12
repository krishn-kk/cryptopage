import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Line } from "react-chartjs-2";
// import { Col, Row, Typography } from 'antd';
// import { CategoryScale } from "chart.js";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
    console.log(coinHistory);

    for (let i = 0; i < coinHistory?.data?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(
            new Date(
                coinHistory?.data?.data?.history[i].timestamp
            ).toLocaleDateString()
        );
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price In USD",
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd",
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    console.log("line chart");
    if (!coinHistory) return "...";
    console.log(data,options);
    return (
        <>
            <Grid className="chart-header">
                <Typography className="chart-title">
                    {coinName} Price Chart{" "}
                </Typography>
                <Grid className="price-container" item>
                    <Typography level={5} className="price-change">
                        Change: {coinHistory?.data?.change}%
                    </Typography>
                    <Typography level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Typography>
                </Grid>
            </Grid>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;
