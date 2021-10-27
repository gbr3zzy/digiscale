import React from "react";
import Dropdown from "../components/Dropdown";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../Assets/blueDream.jpg";

const options = [
  { key: "loc2", text: "Hamiltons Goods" },
  { key: "loc1", text: "Rollings Green" },
];
const data = [
  {
    name: image,
    price: "$40.00",
    unit: "24% THC",
    type: "Hybrid",
  },
  {
    name: image,
    price: "$19.99",
    unit: "100mg",
    type: "Edible",
  },
];

const Products = (props) => {
  const listItems = data.map((d) => (
    // <div className="row flexWrap">
    //   <div className="imgcard">
    //     <img className="imgProduct" src={d.name} />

    //     <div className="cardBorder">{d.price}</div>
    //     <div className="cardBorder">{d.unit}</div>
    //   </div>
    // </div>
    <div className="row flexWrap">
      <div className="col imgLocationcard">
        <img className="imgLocation" src={d.name} />
      </div>
      <div className="col cardLocationBorder"><div>{d.price}</div></div>
      <div className="col cardLocationBorder"><div>{d.price}</div></div>

    </div>
  ));
  return (
    <div className="container-fluid mainContainer">
      <div className="row">
        <Dropdown options={options} />
      </div>
      {listItems}
    </div>
  );
};

export default Products;
