import React, { Component } from 'react';
import './Obruc.css';
import toro from '../assets/art/bik.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Illustration for Taurus born artist Ojomagico
            </span>

class Taurus extends Component {

  render() {
    return(
      <ArtDisplay title='Taurus Moon' client='Private commission' year='2018' technique='Ink &amp; paper' text={Text}>
        <img className="block-image mx-auto mb-5" src={toro} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Taurus;