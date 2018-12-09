import React from "react";

class Essay extends React.Component{
    constructor(props){
        super(props);
        this.data = props.item;
    }

    render() {
        return(
            <section className="section-box">
                <img className="section-box__img" src={data.imgUrl}/>
                <div className="section-box__info">
                    <span className="section-box__title">{data.title}</span>
                    <span className="section-box__author">{data.author}</span>
                    <span className="section-box__time">{data.time}</span>
                    <span className="section-box__desc">{data.desc}</span>
                </div>
            </section>
        )
    }
}
export default Essay;