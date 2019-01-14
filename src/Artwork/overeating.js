import React, { Component } from 'react';
import './Obruc.css';
import food from '../assets/art/noodles.jpg';
import salsa from '../assets/art/salsa.jpg'
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Food illustration
            </span>

class Overeating extends Component {

  render() {
    return(
      <ArtDisplay title='OVEReating series' client='Personal work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={food} alt=""></img>
        <img className="block-image mx-auto mb-5" src={salsa} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Overeating;