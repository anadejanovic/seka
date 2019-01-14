import React, { Component } from 'react';
import './Obruc.css';
import ucka from '../assets/art/ucka.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Illustration of mighty mountain Učka above city of Rijeka in Croatia. 
            </span>

class Ucka extends Component {

  render() {
    return(
      <ArtDisplay title='Učka Mountain' client='Private commission' year='2018' technique='Ink &amp; paper' text={Text}>
        <img className="block-image mx-auto mb-5" src={ucka} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Ucka;