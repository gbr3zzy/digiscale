import React from "react";
import Dropdown from "../components/Dropdown";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../Assets/blueDream.jpg";
import { useHistory } from "react-router-dom";
const options = [
  { key: "loc2", text: "Hamiltons Goods" },
  { key: "loc1", text: "Rollings Green" },
];
const data = [
  {
    name: image,
    price:
      "Rolling Greens, 20 East Street ",
    phone: "555-248-2459",
    rating: "4.5",
  },
  {
    name: image,
    price:
      "Hamiltons goods, 55 west road ",
    phone: "555-248-2459",
    rating: "3.9",
  },
];

const Products = (props) => {
  const history = useHistory();
  const listItems = data.map((d) => (
    <div className="row flexWrap">
      <div className="imgLocationcard">
        <img className="imgLocation" src={d.name} onClick={() => history.push("/products")} />
      </div>
      <div className="cardLocationBorder"><div>{d.price}</div><div>{d.phone}</div><div>{d.rating}</div></div>

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
