import React, { Component } from 'react';
import './Obruc.css';
import prasac from '../assets/art/prasac.png';
import prasac2 from '../assets/art/prasac-2.jpg';
import prasac3 from '../assets/art/animal-farm.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Orwell's pigs
            </span>

class Pigs extends Component {

  render() {
    return(
      <ArtDisplay title="Orwell's pigs" client='Personal work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto" src={prasac} alt=""></img>
        <img className="block-image mx-auto my-5" src={prasac2} alt=""></img>
        <img className="block-image mx-auto mb-5" src={prasac3} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Pigs;