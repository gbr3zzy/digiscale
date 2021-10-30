import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../../Assets/blueDream.jpg";
import { useHistory, useLocation } from "react-router-dom";
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

const options = [
    { key: "loc2", text: "Hamiltons Goods" },
    { key: "loc1", text: "Rollings Green" },
];

const ProjectsTypes = [
    { key: "all", text: "All Products" },
    { key: "flw", text: "Flower" },
    { key: "nonflw", text: "Non-Flower" },
    { key: "mis", text: "Miscellaneous" },
];

const optionsBuyProduct = [
    { key: "1", text: "3.5", price: "$50.00" },
    { key: "2", text: ".25", price: "$75.00" },
    { key: "3", text: ".50", price: "$150.00" },
    { key: "4", text: "1.0", price: "$200.00" },
];

const data = [
    {
        id: '1',
        name: image,
        price: "$40.00",
        unit: "24% THC",
        type: "Hybrid",
        productType: "Flower"
    },
    {
        id: '2',
        name: image,
        price: "$19.99",
        unit: "100mg",
        type: "Edible",
        productType: "Non Flower"
    },
    {
        id: '3',
        name: image,
        price: "$0.99",
        unit: "100mg",
        type: "Edible",
        productType: "Miscellaneous Products"
    },
];

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


    Products = (props) => {
        const [locationData, setLocationData] = useState(props.location.state.detail)
        const [selectedProduct, setselectedProduct] = useState();
        const [buyProduct, setbuyProduct] = useState(false);
        const [imageindex, setimageindex] = useState(1);
        const [totalimage, settotalimage] = useState(3);

        const PlaceOrder = (id) => {
            let priceindex = optionsBuyProduct.findIndex(obj => obj.key === id);
            let pricedata = optionsBuyProduct[priceindex];
            console.log('log data', props)
            props.history.push({
                pathname: '/PlaceOrder',
                state: { detail: data[selectedProduct], price: pricedata }
            })
        }

        const previousImage = () => {
            setimageindex(imageindex == 1 ? 1 : imageindex - 1);
        }

        const nextImage = () => {
            setimageindex(imageindex == totalimage ? totalimage : imageindex + 1);
        }


        const selectedValue = (value) => {

        }

        const selectItemForBuy = (id) => {
            const index = getIndex(id);
            setselectedProduct(index);
            setbuyProduct(true);
        }

        const getIndex = (id) => {
            return data.findIndex(obj => obj.id === id);
        }

        const listItems = data.map((d) => (

            <div onClick={() => selectItemForBuy(d.id)} className="row flexWrap">

                <div className="col imgLocationcard">
                    <img className="imgLocation" src={d.name} />
                </div>
                <div className="col cardLocationBorder"><div>{d.price}</div></div>
                <div className="col cardLocationBorder"><div>{d.price}</div></div>

            </div>
        ));

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
                <div className="row dropdownLocationdiv">
                    <Dropdown onchange={selectedValue} className="dropdownLocation" options={options} />
                </div>
                <div className="row flexWrap">
                    <div className="col-6 imgLocationcard" >
                        <img className="imgLocation" src={locationData.name} />
                    </div>
                    <div className="col-6 imgLocationcard cardLocationBorder">
                        <div >{locationData.price}</div><div>{locationData.phone}</div>
                        <div>{locationData.rating}</div>

                    </div>

                </div >
                {
                    buyProduct == false ?
                        <div className="row del" >
                            <div className="dropdownProductdiv">
                                <Dropdown onchange={selectedValue} className="dropdownProduct" options={ProjectsTypes} />

                            </div>
                            {listItems}
                        </div> :
                        <div className="col-12">
                            <div className="col-12 del flexWrap" >

                                <div className="col-6 imgLocationcard">
                                    <img className="imgLocation" src={data[selectedProduct].name} />

                                </div>
                                <div className="col-6  margin-10">
                                    <Dropdown onchange={PlaceOrder} className="col-12 cardLocationBorder mainColorBg" options={optionsBuyProduct} />
                                    {/* <div className="col-12 cardLocationBorder mainColorBg">Buy</div> */}
                                    <div className="col-12 cardLocationBorder"><div>{data[selectedProduct].price}</div><div>{data[selectedProduct].price}</div></div>
                                </div>
                            </div>
                            <div className="row col-12 flexWrap">
                                <div onClick={() => previousImage()} className="col-2 centerItem">
                                    <FontAwesome
                                        name='bell'
                                        color='white'
                                        size={30}
                                    />
                                </div>

                                <div className="col-2 whiteText centerItem">{imageindex + "/" + totalimage}</div>

                                <div onClick={() => nextImage()} className="col-2 centerItem">
                                    <FontAwesome
                                        name='bell'
                                        color='white'
                                        size={30}
                                    />
                                </div>
                            </div>
                            <div className="col-12 flexWrap">
                                <div className="col-12 textShow">
                                    this is testing message for show
                                        </div>
                            </div>
                            <div className="container-fluid col-12">
                                <div className="flexWrap ">
                                    <div className="scrolImage">
                                        {ListItemImage}
                                    </div>
                                </div>
                            </div>
                        </div>
                }


            </div>
        );
    };

export default Products;
