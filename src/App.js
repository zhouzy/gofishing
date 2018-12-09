import React, { Component } from 'react';
import Header from "./containers/header";
import Essay from "./components/essay";

import axios from "axios";

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.essayList = [];
    }
    componentDidMount(){
        axios.get("http://localhost:3001/getEssay").then(resp => {
            this.essayList.concat(resp.data);
            console.log(this.essayList);
        });
    }

    render() {
        return (
            <div className="app">
                <Header> </Header>
                <main className="app-body">
                    this.essayList.map((item,index) => <Essay item={item} key={index}> </Essay>)
                </main>
            </div>
        );
    }
}

export default App;
