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
            <div className="col-12 full-height">
                <div className="col-12 flexWrap labelDiv">
                    Digiscale
                </div >
                <div onClick={() => TipDeleveryYesOrNo('yes')} className="col-12 flexWrap btnDeleveryDriver">
                    <div className="btnPlaceOrder">Tip Your Delevery Driver</div>
                </div >

                <div onClick={() => TipDeleveryYesOrNo('no')} className="col-12 flexWrap btnDeleveryDriver">
                    <div className="btnTipNO">No</div>
                </div >
            </div>
        </div>
    );
};

export default TipDeleveryOpt;
