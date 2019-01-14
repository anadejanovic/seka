import React, { Component } from 'react';
import './Obruc.css';
import leftovers from '../assets/art/srce.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
             Handcrafted and painted body parts brooches.<br /> <br />

Leftovers. Nostalgia leftovers. During the time when I was living in Berlin, 
I felt eaten up by nostalgia for my home country. 
 So, I made a hand-carved plaster badges with body parts that "stayed" at faraway home.
 Heart is the obvious one, foot is for longing for wandering in different landscapes and golden tooth 
is a memory of my great-grandmother who lived 102 years on this planet.

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