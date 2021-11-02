import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const ThankYouScreen = (props) => {

    console.log('props Place Order', props);

    return (
        <div className="container-fluid mainContainer TipDeleveryMain">
            <div className="full-height">
                <div className="col-12 flexWrap labeldiv">
                    Digiscale
                </div >
                <div className="col-12 flexWrap btnDiv">
                    <div className="btnThankyou">Thank You</div>
                </div >
            </div>

        </div>
    );
};

export default ThankYouScreen;
