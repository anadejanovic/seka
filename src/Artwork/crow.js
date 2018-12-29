import React, { Component } from 'react';
import './Obruc.css';
import crowpoppies from '../assets/art/vrana.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Crow &amp; Poppies
            </span>

class Crow extends Component {

  render() {
    return(
      <ArtDisplay title='Crow &amp; Poppies' client='Personal work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto" src={crowpoppies} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Crow;