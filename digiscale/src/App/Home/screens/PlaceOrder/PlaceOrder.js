import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../../Assets/blueDream.jpg";
import { useHistory, useLocation } from "react-router-dom";
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

const dataImage = [
    {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
    },
    {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
    },

    {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
    },
    {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
    },
    {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
    },
    {
        key: '6',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
    },
    {
        key: '7',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
    },

    {
        key: '8',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
    },
    {
        key: '9',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
    },
    {
        key: '10',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
    },
],


    PlaceOrder = (props) => {

        console.log('props Place Order', props);

        const [locationData, setLocationData] = useState(props.location.state.detail)
        const [price, setprice] = useState(props.location.state.price);
        const [buyProduct, setbuyProduct] = useState(false);

        const selectedValue = (value) => {

        }

        const TipDelevery = () => {
            props.history.push({
                pathname: '/TipDeleveryOpt',
            })
        }



        const ListItemImage = dataImage.map((b) => (
            <figure id="figure">
                <ul>
                    <li>
                        <img src={b.uri} />
                        <figcaption>{b.text}</figcaption>
                    </li>
                </ul>

            </figure>
        ))

        return (
            <div className="container-fluid mainContainer">
                <div className="row col-12 flexWrap">
                    <div className="col-1 crossIcon" >
                        <FontAwesome
                            name='bell'
                            color='white'
                            size={30}
                        />
                    </div>
                    <div className="col-4" >
                        <img className="imgLocation" src={locationData.name} />
                    </div>
                    <div className="col-3 imgLocationcard cardLocationBorder">
                        <div >{locationData.price}</div><div>{locationData.phone}</div>
                        <div>{locationData.rating}</div>
                    </div>
                    <div className="col-1 lessIcon" >
                        <FontAwesome
                            name='bell'
                            color='red'
                            size={30}
                        />
                    </div>
                    <div className="col-1 addIcon" >
                        <FontAwesome
                            name='bell'
                            color='green'
                            size={30}
                        />
                    </div>

                </div >
                <div className="col-12 flexWrap">

                    <div className="col-12 imgLocationcard priceDetail">
                        <div >{locationData.price}</div>
                    </div>
                    <div className="col-12 imgLocationcard priceDetail">
                        <div >Tax :3.9</div>
                    </div>
                    <div className="col-12 imgLocationcard priceDetail">
                        <div >Delivery : xyz</div>
                    </div>


                </div >
                <div className="col-12 flexWrap btnStreetAdress">
                    Street Address
                </div >
                <div className="col-12 flexWrap totalPrice">
                    Total {price.price}
                </div >
                <div className="col-12 flexWrap PlaceOrderdiv">
                    <div onClick={() => TipDelevery()} className="btnPlaceOrder">Place Order</div>
                </div >
                <div className="container-fluid col-12">
                    <div className="flexWrap ">
                        <div className="scrolImage">
                            {ListItemImage}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default PlaceOrder;
