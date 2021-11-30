import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import GoogleMaps from '../../../components/GoogleMaps';
import "./index.css";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `3040px` }} />,
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


function Pickups(props) {

    const [isMarkerShown, setisMarkerShown] = useState(false);

    const delayedShowMarker = () => {
        setTimeout(() => {
            setisMarkerShown(true)
        }, 2000)
    }

    const handleMarkerClick = () => {
        setisMarkerShown(true)
        delayedShowMarker()
    }

    useEffect(() => {
        delayedShowMarker();
    })

    const GoPickupDetails = () => {
        props.history.push({
            pathname: '/PickupDetails',
        })
    }

    const GoPreviousPickups = () => {
        props.history.push({
            pathname: '/PreviousPickups',
        })
    }

    return (
        <div className="container-fluid mainPickupContainer">
            <div className="col-12 full-height">
                <div className="btnPickupView">
                    <div onClick={() => GoPickupDetails()} className="btnPickups">
                        PickUp
                    </div>

                </div >
                <div className="btnPreviousPickupView">
                    <div onClick={() => GoPreviousPickups()} className="btnPreviousPickup">
                        Previous PickUp
                    </div>

                </div >
                <div className="44">
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

export default Pickups;