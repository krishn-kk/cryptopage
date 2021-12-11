import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { AiFillHome } from "react-icons/ai";
import {
    BsCurrencyBitcoin,
    BsCurrencyExchange,
    BsLightbulb,
} from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Typography from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
function NavBar(props) {
    const [color, setColor] = useState(0);
    const onClickSetColor = (index) => {
        setColor(index);
    };
    const param = useLocation();
    useEffect(() => {
        switch (param.pathname) {
            case "/crypto":
                setColor(1);
                break;
            case "/exchange":
                setColor(2);
                break;
            case "/news":
                setColor(3);
                break;
            case "/":
                setColor(0);
                break;
            default:
                setColor(-1);
        }
    }, [param]);
    console.log("krishn", param);
    return (
        <div className="navbar">
            <div className="header">
                <span className="header_logo">
                    <FaMoneyCheckAlt size={45} />
                </span>
                <span className="header_title">@CrYpInFo</span>
            </div>
            <div className="break"></div>
            <div className="menu">
                <Link to="/" className="router_link">
                    <div
                        className={`menu_item ${
                            color == 0 ? "menu_itembackground" : ""
                        } `}
                        onClick={() => onClickSetColor(0)}
                    >
                        <span className="menu_image">
                            <AiFillHome />
                        </span>

                        <span className="menu_title">Home</span>
                    </div>
                </Link>
                <Link to="/crypto" className="router_link">
                    <div
                        className={`menu_item ${
                            color == 1 ? "menu_itembackground" : ""
                        } `}
                        onClick={() => onClickSetColor(1)}
                    >
                        <span className="menu_image">
                            <BsCurrencyBitcoin />
                        </span>
                        <span className="menu_title">Currencies</span>
                    </div>
                </Link>
                <Link to="/exchange" className="router_link">
                    <div
                        className={`menu_item ${
                            color == 2 ? "menu_itembackground" : ""
                        } `}
                        onClick={() => onClickSetColor(2)}
                    >
                        <span className="menu_image">
                            <BsCurrencyExchange />
                        </span>
                        <span className="menu_title">Exchange</span>
                    </div>
                </Link>
                <Link to="/news" className="router_link">
                    <div
                        className={`menu_item ${
                            color === 3 ? "menu_itembackground" : ""
                        } `}
                        onClick={() => onClickSetColor(3)}
                    >
                        <span className="menu_image">
                            <BsLightbulb />
                        </span>
                        <span className="menu_title">News</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
