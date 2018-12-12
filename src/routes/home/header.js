import React from "react";
import {NavBar, Icon, SearchBar} from "antd-mobile";
import Avator from "./avator.js";

import "@/routes/home/header.less";

class Header extends React.Component{
    render(){
        return(
            <header className="page-header">
                <span className="logo-box"> </span>
                <SearchBar className="search-box"> </SearchBar>
                <Avator className="avatar-box"> </Avator>
            </header>
        )
    }
}
export default Header;