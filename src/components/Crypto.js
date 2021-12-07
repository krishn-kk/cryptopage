import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { baseUrl, createUrl } from "../utils/utils";
import CryptoCard from "../UtilsComponents/CryptoCard";
import axios from "axios";

function Crypto(props) {
    const count = props.count || 100;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let url = createUrl(baseUrl + `/coins?limit=${count}`);
        console.log(url);
        axios.request(url).then((response) => {
            console.log(response);
            setData(response.data.data);
            setLoading(false);
        });
    }, []);
    console.log(data?.coins);
    if (loading) return "...::: Loading";
    return (
        <div>
            {/* Search Bar */}
            {/* show all cards */}
            <Grid container align="left" spacing={1} direction="row">
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
