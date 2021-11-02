import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const TipAmount = (props) => {

    console.log('props Place Order', props);

    const deleveryCharges = (id) => {
        props.history.push({
            pathname: '/ThankYouScreen',
        })
    }

    return (
        <div className="container-fluid mainContainer TipDeleveryMain">
            <div className="col-12 full-height">
                <div className="col-12 flexWrap labelDiv">
                    Digiscale
                </div >
                <div className="col-12 flexWrap TipAmountDetail">
                    <div className="AmountItems">
                        <label className="col-12" >Tip your delevery driver</label>
                        <div onClick={() => deleveryCharges('1')} className="col-12 priceFont">15% $0.00</div>
                        <div onClick={() => deleveryCharges('2')} className="col-12 priceFont">25% $0.00</div>
                        <div onClick={() => deleveryCharges('3')} className="col-12 priceFont">30% $0.00</div>
                    </div>
                </div >
                <div className="col-12 flexWrap labelCustomDiv">
                    Custom
                </div >
            </div>
        </div>
    );
};

export default TipAmount;
