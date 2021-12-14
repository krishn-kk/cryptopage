import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider, Typography } from "@material-ui/core";
import millify from "millify";
import { Avatar } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
    root: {
        // width: "26vw",
        // height: "45vh",
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
        // height: "8vh",
        // marginTop: "5vh",
    },
    header_title: {
        fontWeight: "lighter",
        fontSize: "1.2rem",
        marginLeft: "0.4rem",
        alignSelf: "start",
    },
    provider_container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default function NewsCard(props) {
    // const { currency } = props;
    const classes = useStyles();
    const news = props.news;
    // const news = {
    //     _type: "NewsArticle",
    //     name: "Bitcoin: Self-proclaimed creator wins right to keep $50B BTC fortune he claims to own",
    //     url: "https://news.yahoo.com/bitcoin-self-proclaimed-creator-wins-152857132.html",
    //     image: {
    //         _type: "ImageObject",
    //         thumbnail: {
    //             _type: "ImageObject",
    //             contentUrl:
    //                 "https://www.bing.com/th?id=OVFT.vpCVSOwDsoZqs6ICXrXPAS&pid=News",
    //             width: 700,
    //             height: 466,
    //         },
    //     },
    //     description:
    //         "A computer scientist who claims to be the inventor of bitcoin has won a legal battle to keep hold of a hoard of the cryptocurrency worth tens of billions of dollars, despite not proving that he actually owns it.",
    //     about: [
    //         {
    //             _type: "Thing",
    //             readLink:
    //                 "https://api.cognitive.microsoft.com/api/v7/entities/6257d274-f7fd-1260-a8ab-5b851832255b",
    //             name: "Self-proclaimed",
    //         },
    //     ],
    //     provider: [
    //         {
    //             _type: "Organization",
    //             name: "YAHOO!News",
    //             image: {
    //                 _type: "ImageObject",
    //                 thumbnail: {
    //                     _type: "ImageObject",
    //                     contentUrl:
    //                         "https://www.bing.com/th?id=ODF.nYADEgS75l8rdCg9D-p_OQ&pid=news",
    //                 },
    //             },
    //         },
    //     ],
    //     datePublished: "2021-12-08T15:28:00.0000000Z",
    // };
    const demoImage =
        "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
    // const { currency } = props;
    // return "null";
    return (
        <Card className={classes.root} variant="outlined">
            <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <div className={classes.header}>
                    <span className={classes.header_title}>{news?.name}</span>
                    <span>
                        <img
                            style={{
                                // width: "8vw",
                                // height: "17vh",
                                marginRight: "0.4rem",
                                marginTop: "0.4rem",
                            }}
                            src={
                                news?.image?.thumbnail?.contentUrl || demoImage
                            }
                        />
                    </span>
                </div>
                <CardContent>
                    <p>
                        {news.description.length > 100
                            ? `${news.description.substring(0, 100)}...`
                            : news.description}
                    </p>
                    <div className={classes.provider_container}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={
                                    news.provider[0]?.image?.thumbnail
                                        ?.contentUrl || demoImage
                                }
                                alt=""
                            />
                            <Typography className="provider-name">
                                {news.provider[0]?.name}
                            </Typography>
                        </div>
                        <Typography>
                            {moment(news.datePublished).startOf("ss").fromNow()}
                        </Typography>
                    </div>
                </CardContent>
            </a>
        </Card>
    );
}
