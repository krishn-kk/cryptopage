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
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="navBar">
                <NavBar />
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
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="center"
                    >
                        <Grid item xs={4} sm={4} lg={4}>
                            <Link to="/" className="router_link">
                                Home
                            </Link>
                        </Grid>
                        <Grid item xs={4} sm={4} lg={4}>
                            <Link to="/exchange" className="router_link">
                                Exchanges
                            </Link>
                        </Grid>
                        <Grid item xs={4} sm={4} lg={4}>
                            <Link to="/news" className="router_link">
                                News
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default App;
