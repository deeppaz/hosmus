import React from 'react';
import Toastify from 'toastify-js';
import '../Hosmus/style.css';
import './style.css';


//Copy hex code to clipboard with toastify packages
const copyToClipboard = (current) => {
  const hexCodeValue = current;
  Toastify({
    text: hexCodeValue + " Successful copied!",
    duration: 1500,
    className: "hexCodeInfo", 
  }).showToast();
};

//Swatches
function Swatches(props) {
  const swatches = props.swatches.map((item) =>
    <li
      key={item.index}
      onClick={() => copyToClipboard(`${item.swatch}`, props)}
    >
      <span
        className="swatch"
        style={{ backgroundColor: item.swatch }}
      ></span>
      {/* <small className="hexCode">
        {item.swatch}
        //hex code shows
      </small> */}
    </li>
  );
  return (
    <div
      className="palette-generator-swatches"
    >
      <ul id="colors">{swatches}</ul>
    </div>
  );
}

export default Swatches;