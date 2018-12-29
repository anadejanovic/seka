import React, { Component } from 'react';
import './Obruc.css';
import astro from '../assets/art/astronaut.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Floating astronaut
            </span>

class Astronaut extends Component {

  render() {
    return(
      <ArtDisplay title='Floating astronaut' client='Private commission' year='2018' technique='Ink &amp; paper' text={Text}>
        <img className="block-image mx-auto" src={astro} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Astronaut;