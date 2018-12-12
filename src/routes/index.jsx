/**
 * 路由表
 * zhouzhongyu
 * 2018-12-12
 */
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "@/routes/home/index.jsx";
import "@/routes/App.css";

let AppRouter = () => (
    <Router>
        <Route component={Home} path="/" />
    </Router>
)

export default AppRouter;