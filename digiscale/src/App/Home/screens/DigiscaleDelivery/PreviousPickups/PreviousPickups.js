import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import GoogleMaps from '../../../components/GoogleMaps';
import "./index.css";
import { compose, withProps } from "recompose"
import * as FaIcons from 'react-icons/fa';


function PreviousPickups() {
    return (
        <div className="container-fluid mainPickupContainer">
            <div className="col-12 full-height">
                <div className="PreviousPickupView">
                    <div className="PreviousPickup">
                        <div className="PreviousOrderView">
                            <div className="PreviousOrderblock">

                                <div className="PreviousOrderAddress">
                                    [DispensaryName][Address][PhoneNumber]
                                </div>
                                <div className="PreviousOrderSummary">
                                    Order Summary
                                </div>
                                <div className="PreviousOrderCallDispensaryView">
                                    <div className="PreviousOrderCallDispensary">call Dispensary</div>
                                </div>
                                <div className="PreviousOrderCustomerName">
                                    Deliveied to [Customer name]
                                </div>
                                <div className="PreviousOrderCallDispensaryView">
                                    <div className="PreviousOrderCall">call Dispensary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="ItemlistViewFlower">
                    <div className="row rowView">
                        <div className="bulletFlower"></div>
                        <div className="flowerdiv">Flower</div>
                    </div>
                </div >
                <div className="ItemlistView">
                    <div className="row rowView">
                        <div className="bulletNonFlower"></div>
                        <div className="flowerdiv">Non Flower</div>
                    </div>
                </div >
                <div className="ItemlistView">
                    <div className="row rowView">
                        <div className="bulletMiscellanies"></div>
                        <div className="flowerdiv">Miscellanies Products</div>
                    </div>
                </div >

            </div>

        </div>
    );
}

export default PreviousPickups;