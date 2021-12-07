import React, { useState } from "react";
import "./NavBar.css";
import { AiFillHome } from "react-icons/ai";
import {
    BsCurrencyBitcoin,
    BsCurrencyExchange,
    BsLightbulb,
} from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Typography from "@material-ui/core";
function NavBar(props) {
    const [color, setColor] = useState(0);
    const onClickSetColor = (index) => {
        setColor(index);
    };
    return (
        <div className="navbar">
            <div className="header">
                <span className="header_logo">
                    <FaMoneyCheckAlt size={45} />
                </span>
                <span className="header_title">CRYPTOCHECK</span>
            </div>
            <div className="break"></div>
            <div className="menu">
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
            </div>
        </div>
    );
}

export default NavBar;
