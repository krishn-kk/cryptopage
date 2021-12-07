import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CryptoCard from "./UtilsComponents/CryptoCard";

function App() {
    return (
        <div className="App">
            <div className="navBar">
                <NavBar />
            </div>
            <div className="screen">
                <Home />
            </div>
        </div>
    );
}

export default App;
