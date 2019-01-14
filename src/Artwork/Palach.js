import React, { Component } from 'react';
import './Palach.css';
import palach from '../assets/art/palach.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
 There is one place in my hometown where everybody had drank beer at one point in their lifetime and that place is called Palach.
 Palach is the oldest rock club in town, standing like a rock since 1969 and it bears the name of Jan Palach.
 If somebody would ask me, who is Jan Palach? I would reply: That’s that Czech student who put himself on fire. 
 But he is so much more… Jan was a 21 year old Czech student who committed suicide by self-immolation 
 as an act of political protest against the end of the Prague Spring (invasion of Soviet Union on Czechoslovakia in 1969). 
 This  drawing was made in memory of him. 
            </span>

class Palach extends Component {

  render() {
    return(
      <ArtDisplay title='Jan Palach' client='Personal Work' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={palach} alt="Obruc-color" />
      </ArtDisplay>
    );
  }
}

export default Palach;