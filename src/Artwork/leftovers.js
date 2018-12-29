import React, { Component } from 'react';
import './Obruc.css';
import leftovers from '../assets/art/srce.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Leftovers
            </span>

class Leftovers extends Component {

  render() {
    return(
      <ArtDisplay title='Leftovers' client='Personal work' year='2018' technique='Plaster &amp; acrylic paint' text={Text}>
        <img className="block-image mx-auto mb-5" src={leftovers} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Leftovers;