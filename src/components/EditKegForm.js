import React from "react";
import ReusableForm from "./ReusableForm";
import Proptypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, quantity: event.target.quantity.value, id: keg.id});
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg Info"/>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: Proptypes.object,
  onEditKeg: Proptypes.func
};

export default EditKegForm;