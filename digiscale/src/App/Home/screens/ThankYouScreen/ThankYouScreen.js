import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const ThankYouScreen = (props) => {

    console.log('props Place Order', props);

    return (
        <div className="container-fluid mainContainer TipDeleveryMain">

            <div className="col-12 flexWrap PlaceOrderText">
                Digiscale
            </div >
            <div className="col-12 flexWrap PlaceOrderdiv">
                <div className="btnPlaceOrder">Tip Your Delevery Driver</div>
            </div >

            <div className="col-12 flexWrap PlaceOrderdiv">
                <div className="btnTipNO">No</div>
            </div >

        </div>
    );
};

export default ThankYouScreen;
