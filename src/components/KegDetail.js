import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <h4>{keg.price}</h4>
      <h4>{keg.flavor}</h4>
      <h4>{keg.quantity}</h4>
      <button onClick = { props.onClickingEdit }>Update Keg Info</button>
      <button onClick = {() => onClickingDelete(keg.id)}>Retire Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;