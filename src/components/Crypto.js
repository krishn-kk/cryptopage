import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { baseUrl, createUrl } from "../utils/utils";
import CryptoCard from "../UtilsComponents/CryptoCard";
import axios from "axios";
import { Input } from "@material-ui/core";
import "./Crypto.css";

function Crypto(props) {
    const count = props.count || 100;
    const [masterData, setMasterData] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        let url = createUrl(baseUrl + `/coins?limit=${count}`);
        console.log(url);
        axios.request(url).then((response) => {
            console.log(response);
            setData(response.data.data);
            setMasterData(response.data.data);
            setLoading(false);
        });
    }, []);
    useEffect(() => {
        console.log(data?.coins);
        let filterdData;
        {
            filterdData = masterData?.coins
                ? (filterdData = masterData?.coins.filter((coin) =>
                      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ))
                : null;
            filterdData && setData({ coins: filterdData });
        }
    }, [searchTerm]);
    console.log(data?.coins);
    if (loading) return "...::: Loading";
    return (
        <div>
            {/* Search Bar */}
            {/* show all cards */}
            {!props.count && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search"
                        autoFocus
                    />
                </div>
            )}
            <Grid
                container
                align="left"
                spacing={1}
                direction="row"
                style={{ marginTop: "1vh" }}
            >
                {data.coins.map((data) => (
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                        item
                        style={{
                            width: "10vw",
                            height: "40vh",
                            boxShadow: "initial",
                        }}
                    >
                        <CryptoCard currency={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Crypto;
