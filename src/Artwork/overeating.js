import React, { Component } from 'react';
import './Obruc.css';
import food from '../assets/art/noodles.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              OVEReating series
            </span>

class Overeating extends Component {

  render() {
    return(
      <ArtDisplay title='OVEReating series' client='Personal work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto" src={food} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Overeating;