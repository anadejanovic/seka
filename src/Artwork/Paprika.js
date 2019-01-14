import React, { Component } from 'react';
import paprika from '../assets/art/paprika.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
As a kid all I ever wanted was to have a paprika birthday cake since
I refused to eat everything except carrots and paprikas. At that time in Yugoslavia, 
existence of carrot cake was unknown. 
            </span>

class Paprika extends Component {

  render() {
    return(
      <ArtDisplay title='Paprika Birthday Cake' client='Personal Work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={paprika} alt="Obruc-color" />
      </ArtDisplay>
    );
  }
}

export default Paprika;