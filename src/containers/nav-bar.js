import React from "react";
import "./nav-bar.less";

class NavBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (
            <div className="nav-bar">
                <span className="nav-bar__item nav-bar__item-1"> 邀约 </span>
                <span className="nav-bar__item nav-bar__item-2"> 悬坠钓 </span>
                <span className="nav-bar__item nav-bar__item-3"> 谷麦 </span>
                <span className="nav-bar__item nav-bar__item-4"> 大小爆炸 </span>
            </div>
        );
    }
}
export default NavBar;