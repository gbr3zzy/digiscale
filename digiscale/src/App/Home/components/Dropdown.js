import React from "react";
import "./index.css";
const Dropdown = (props) => {
    console.log('pros', props);
    const selectValue = (e) => {
        props.onchange(e);// can pass callback data here
    }
    return <>
        <select onChange={(e) => selectValue(e.target.value)}
            {...props}>
            {props.options &&
                props.options.map(o =>
                    <option key={o.key} value={o.key} className="dropdownView">
                        {o.text} {o.price}</option>)
            }
        </select>
    </>;
}
export default Dropdown;