import React, { Component } from 'react';
import './Obruc.css';
import '../Components/ArtDisplay'
import ObrucColor from '../assets/art/obruc-color.jpg';
import ObrucGrey from '../assets/art/obruc-grey.jpg';
import ArtDisplay from '../Components/ArtDisplay';

class Obruc extends Component {

  render() {
    return(
      <ArtDisplay title='Mountaineering Society Logo' client='P.D. Obruč - Jelenje' year='2018' technique='Mixed media'>
        <img className="block-image" src={ObrucColor} alt="Obruc-color"></img>
        <img className="block-image" src={ObrucGrey} alt="Obruc-grey"></img>
      </ArtDisplay>
    );
  }
}

export default Obruc;