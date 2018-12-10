import React from "react";
let img = require("@/assets/img/pic1.jpg");
import "./essay.less";

class Essay extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        let data = this.props.item;

        return(
            <div className="essay-box">
                <div className="essay-box__header"> {data.title} </div>
                <div className="essay-box__body">
                    <img className="essay-box__img" src={img}/>
                    <div className="essay-box__desc">
                        {data.desc}
                    </div>
                </div>
                <div className="essay-box__footer">
                    <span className="essay-box__author">{data.author}</span>
                    <span className="essay-box__time">{data.time}</span>
                </div>
            </div>
        )
    }
}
export default Essay;