import React, { Component } from 'react';
import './Obruc.css';
import mind from '../assets/art/overthinking.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Overthinking
            </span>

class Overthinking extends Component {

  render() {
    return(
      <ArtDisplay title='Overthinking' client='Personal work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={mind} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Overthinking;