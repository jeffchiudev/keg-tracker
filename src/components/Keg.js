import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        {/* <h4>{props.price}</h4>
        <h4>{props.flavor}</h4>
        <h4>{props.quantity}</h4> */}
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;