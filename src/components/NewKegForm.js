import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand'/>
        <input
          type='text'
          name='price'
          placeholder='Keg Price'/>
        <input
          type='text'
          name='flavor'
          placeholder='Keg Flavor'/>
        <input
          type='number'
          name='quantity'
          placeholder='# of pints left'/>
        <button type='submit'>Enter Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;