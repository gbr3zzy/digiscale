import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const TipDeleveryOpt = (props) => {

    console.log('props Place Order', props);

    const TipDeleveryYesOrNo = (id) => {
        if (id == 'yes') {
            props.history.push({
                pathname: '/TipAmount',
            })
        } else {
            props.history.push({
                pathname: '/ThankYouScreen',
            })
        }

    }

    return (
        <div className="container-fluid mainContainer TipDeleveryMain">

            <div className="col-12 flexWrap PlaceOrderText">
                Digiscale
            </div >
            <div onClick={() => TipDeleveryYesOrNo('yes')} className="col-12 flexWrap PlaceOrderdiv">
                <div className="btnPlaceOrder">Tip Your Delevery Driver</div>
            </div >

            <div onClick={() => TipDeleveryYesOrNo('no')} className="col-12 flexWrap PlaceOrderdiv">
                <div className="btnTipNO">No</div>
            </div >

        </div>
    );
};

export default TipDeleveryOpt;
