import React, { Component } from 'react';
import './Obruc.css';
import '../Components/ArtDisplay'
import ObrucColor from '../assets/art/obruc-color.jpg';
import ObrucGrey from '../assets/art/obruc-grey.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Mountaineering society logo I did for P.D. Obruč - Jelenje represents everything
              about me. It has cool slick lines, hills and even a nice lake. It's a very nice logo,
              I am very proud of it. Peace!
            </span>

class Obruc extends Component {

  render() {
    return(
      <ArtDisplay title='Mountaineering Society Logo' client='P.D. Obruč - Jelenje' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto" src={ObrucColor} alt="Obruc-color"></img>
        <img className="block-image mx-auto" src={ObrucGrey} alt="Obruc-grey"></img>
      </ArtDisplay>
    );
  }
}

export default Obruc;