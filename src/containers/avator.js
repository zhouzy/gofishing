import React from "react";
import "./avator.less";

let avatarUrl = require("@/assets/img/logo.svg");

class Avator extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="avatar-box">
                <i className="iconfont icon-user"> </i>
            </div>
        );
    }
}

export default Avator;