import React from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Location from "../screens/Location";
import Products from "../screens/Products";

function Dashboard() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Location" component={Location} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;
