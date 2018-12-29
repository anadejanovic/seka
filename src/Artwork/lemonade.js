import React, { Component } from 'react';
import './Obruc.css';
import lemon from '../assets/art/limunada.jpg';
import lemon2 from '../assets/art/limunada-2.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Rijeka's lemonade
            </span>

class Lemonade extends Component {

  render() {
    return(
      <ArtDisplay title='Crow &amp; Poppies' client='Urbani Separe' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={lemon} alt=""></img>
        <img className="block-image mx-auto mb-5" src={lemon2} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Lemonade;