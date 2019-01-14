import React, { Component } from 'react';
import './Obruc.css';
import crowpoppies from '../assets/art/vrana.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Illustration inspired by Berlin’s crows that secretly own the city.  
            </span>

class Crow extends Component {

  render() {
    return(
      <ArtDisplay title='Crow &amp; Poppies' client='Personal work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={crowpoppies} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Crow;