import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CryptoCard from "./UtilsComponents/CryptoCard";
import Crypto from "./components/Crypto";
import { Route, Switch } from "react-router";
import Exchange from "./components/Exchange";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";
import SearchBar from "./UtilsComponents/SearchBar";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MenuItem } from "./components/NavBar";
import { useState } from "react";

function App() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="App">
            <div className="navBar">
                <NavBar />
            </div>
            <div className="mobile">
                <div>CrypInfo</div>
                {/* <button></button> */}
                <div>
                    <MenuItem row />
                </div>
            </div>
            <div className="screen">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/crypto" exact component={Crypto} />
                    <Route path="/exchange" exact component={Exchange} />
                    <Route path="/news" exact component={News} />
                    <Route exact path="/crypto/:coinId">
                        <CryptoDetails />
                    </Route>
                </Switch>
                {/* <SearchBar /> */}
                <div className="footer">
                    <Typography style={{ color: "white", textAlign: "center" }}>
                        Copyright © 2021
                        <Link to="/" className="router_link">
                            CrypInfo Inc.
                        </Link>{" "}
                        <br />
                        All Rights Reserved.
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        style={{ padding: "1vw" }}
                    >
                        <span style={{ marginLeft: "1vw" }}>
                            <Link to="/" className="router_link">
                                Home
                            </Link>
                        </span>
                        <span style={{ marginLeft: "1vw" }}>
                            <Link to="/exchange" className="router_link">
                                Exchanges
                            </Link>
                        </span>
                        <span style={{ marginLeft: "1vw" }}>
                            <Link to="/news" className="router_link">
                                News
                            </Link>
                        </span>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default App;
