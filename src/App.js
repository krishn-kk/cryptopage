import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CryptoCard from "./UtilsComponents/CryptoCard";
import Crypto from "./components/Crypto";
import { Route, Switch } from "react-router";
import Exchange from "./components/Exchange";
import News from "./components/News";

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
                </Switch>
            </div>
        </div>
    );
}

export default App;
