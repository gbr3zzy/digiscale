import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../../Assets/blueDream.jpg";
import { useHistory, useLocation } from "react-router-dom";
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



const Products = (props) => {
    const [locationData, setLocationData] = useState(props.location.state.detail)
    const [selectedProduct, setselectedProduct] = useState();
    const [buyProduct, setbuyProduct] = useState(false);

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

    return (
        <div className="container-fluid mainContainer">
            <div className="row dropdownLocationdiv">
                <Dropdown className="dropdownLocation" options={options} />
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
                    <div className=" del  flexWrap" >

                        <div className="col-6 imgLocationcard">
                            <img className="imgLocation" src={data[selectedProduct].name} />
                        </div>
                        <div className="col-6  margin-10">
                            <div className="col-12 cardLocationBorder mainColorBg">Buy</div>
                            <div className="col-12 cardLocationBorder"><div>{data[selectedProduct].price}</div><div>{data[selectedProduct].price}</div></div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Products;
