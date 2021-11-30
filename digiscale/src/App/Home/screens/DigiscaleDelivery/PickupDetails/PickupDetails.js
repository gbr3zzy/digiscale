import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import GoogleMaps from '../../../components/GoogleMaps';
import "./index.css";
import { compose, withProps } from "recompose"
import * as FaIcons from 'react-icons/fa';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `300px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)


function PickupDetails() {

    const [isMarkerShown, setisMarkerShown] = useState(false);
    const [pickupClicked, setpickupClicked] = useState(false);
    const [forPickup, setforPickup] = useState(false);
    const [forDeleverd, setforDeleverd] = useState(false);

    const delayedShowMarker = () => {
        setTimeout(() => {
            setisMarkerShown(true)
        }, 3000)
    }

    const handleMarkerClick = () => {
        setisMarkerShown(true)
        delayedShowMarker()
    }

    useEffect(() => {
        delayedShowMarker();
    })

    const GoforPickup = () => {
        setforPickup(true);
    }

    const GoforDeleverd = () => {
        setforDeleverd(true);
    }

    return (
        <div className="container-fluid mainPickupContainer">
            <div className="col-12 full-height">
                <div className="PickupView">
                    {
                        forDeleverd == false ?
                            <>
                                {
                                    forPickup == false ?
                                        <>
                                            {
                                                pickupClicked == false ?
                                                    <div className="Pickup">
                                                        <label className="lablediv">Tab set location to receive local orders ready for pick up</label>
                                                        <div className="btnPickupView">
                                                            <div onClick={() => setpickupClicked(true)} className="btnPickup">
                                                                [Dispensary Name] [Address]
                                                                [Phone Number]
                                                </div>

                                                        </div>

                                                    </div> :
                                                    <div className="Pickup">
                                                        <label className="lablediv">Tab set location to receive local orders ready for pick up</label>
                                                        <div className="btnPickupView">
                                                            <div className="btnPickup">
                                                                [Dispensary Name] [Address]
                                                                [Phone Number]
                                                </div>

                                                        </div>
                                                        <div className="PickupViewDetails">
                                                            <div className=" PickupDetails">
                                                                <div className="row btnrow">
                                                                    <div className="btnCall">call</div>
                                                                    {/* <div className=""></div> */}
                                                                    <div className="btnCancel">cancel</div>
                                                                </div>
                                                                <div className="btnDetailsPickupsView">
                                                                    <div onClick={() => GoforPickup()} className="btnDetailsPickups">Pickup</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                            }
                                        </> :
                                        <>
                                            <div className="Pickup">
                                                <label className="lableforDetailPickupdiv">Show budtender your badge your id number</label>
                                                <div className="forDetailPickupView">
                                                    <div className="forDetailPickupblock">
                                                        <div className="forDetailAddress">
                                                            [DispensaryName][Address][PhoneNumber]
                                                        </div>
                                                        <div className="btnforDetailsPickupsView">
                                                            <div onClick={() => GoforDeleverd()} className="btnforDetailsPickups">Pickup</div>
                                                        </div>
                                                        <div className="forDetailIcon">
                                                            <FaIcons.FaShoppingBasket size={30} color={'yellow'} />
                                                        </div>
                                                        <div className="forDetailIDNumber">
                                                            1234
                                            </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </>
                                }
                            </>
                            :
                            <>
                                <div className="Pickup">
                                    <div className="forDeleverdView">
                                        <div className="forDeleverdblock">
                                            <div className="forDetailAddress">
                                                [DispensaryName][Address][PhoneNumber]
                                            </div>
                                            <div className="forDeleverdOrderDetails">
                                                Order details
                                            </div>

                                            <div className="row forDeleverdbtnrow">
                                                <div className="btnCall">call</div>
                                                <div className="btnDeleverd">Deleverd</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </>
                    }




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
                <div className="googlemapView">
                    <div className="googlemap">
                        <MyMapComponent
                            isMarkerShown={isMarkerShown}
                            onMarkerClick={handleMarkerClick}
                        />
                    </div>
                </div >
            </div>

        </div>
    );
}

export default PickupDetails;