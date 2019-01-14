import React, { Component } from 'react';
import './Obruc.css';
import ObrucColor from '../assets/art/obruc-color.jpg';
import ObrucGrey from '../assets/art/obruc-grey.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Did you know that we have Alps in Croatia? They are called Grobnik Alps, and are formed of 
              15 mountain peaks that stand proudly above my hometown of Rijeka. I was fortunate enough to 
              be given an opportunity to make logo illustration and design for Mountaineering association
              "Obruč-Jelenje" that takes care of the mountain cabin situated amidst the peaks and stunning 
              nature surrounding it.
            </span>

class Obruc extends Component {

  render() {
    return(
      <ArtDisplay title='Grobnik Alps - Mountaineering Society Logo' client='P.D. Obruč - Jelenje' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={ObrucColor} alt="Obruc-color"></img>
        <img className="block-image mx-auto mb-5" src={ObrucGrey} alt="Obruc-grey"></img>
      </ArtDisplay>
    );
  }
}

export default Obruc;