import React, { Component } from 'react';
import './Obruc.css';
import dubro1 from '../assets/art/dubrovnik.jpg';
import dubro2 from '../assets/art/dubrovnik-2.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Roofs of dubrovnik
            </span>

class Dubrovnik extends Component {

  render() {
    return(
      <ArtDisplay title='Roofs of Dubrovnik' client='Personal work' year='2018' technique='Ink &amp; paper' text={Text}>
        <img className="block-image mx-auto" src={dubro1} alt=""></img>
        <img className="block-image mx-auto mb-5" src={dubro2} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Dubrovnik;