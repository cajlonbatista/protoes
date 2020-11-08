import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { Landing } from "./pages/Landing/Landing";
import { Routes } from "./routes";

import "./global/styles/styles.css";

export default class App extends Component {
  componentDidMount() {}
  render() {
    const acess = localStorage.getItem('@welcome-kentaurus/acess');
    if (acess == 'false') {
        localStorage.setItem('@welcome-kentaurus/acess', false);
        return (
          <BrowserRouter>
          <Header></Header>
          <Routes></Routes>
        </BrowserRouter>
        );
    } else {
        localStorage.setItem('@welcome-kentaurus/acess', false);
        return (
            <BrowserRouter>
                <Landing />
            </BrowserRouter>
        )
    }
  }
}
