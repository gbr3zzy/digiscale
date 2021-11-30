import React from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import Location from "../screens/Locations/Location";
import Products from "../screens/Products/Products";
import PlaceOrder from '../screens/PlaceOrder/PlaceOrder'
import TipDeleveryOpt from '../screens/TipDeleveryOpt/TipDeleveryOpt';
import TipAmount from '../screens/TipAmount/TipAmount';
import ThankYouScreen from '../screens/ThankYouScreen/ThankYouScreen';
import Pickups from '../screens/DigiscaleDelivery/Pickups/Pickups';
import PickupDetails from '../screens/DigiscaleDelivery/PickupDetails/PickupDetails';
import PreviousPickups from '../screens/DigiscaleDelivery/PreviousPickups/PreviousPickups';

function Dashboard() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Location" component={Location} />
          <Route path="/products" component={Products} />
          <Route path="/PlaceOrder" component={PlaceOrder} />
          <Route path="/TipDeleveryOpt" component={TipDeleveryOpt} />
          <Route path="/TipAmount" component={TipAmount} />
          <Route path="/ThankYouScreen" component={ThankYouScreen} />

          {/* { digiscale Delivery } */}
          <Route path="/Pickups" component={Pickups} />
          <Route path="/PickupDetails" component={PickupDetails} />
          <Route path="/PreviousPickups" component={PreviousPickups} />
        </Switch>
      </Router>

    </>
  );
}

export default Dashboard;
