import React, { Component } from 'react';
import './Palach.css';
import palach from '../assets/art/palach.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Jan Palach was a Czech student of history and political economy.  His self-immolation was a political protest against 
              the end of the Prague Spring resulting from the 1968 invasion of Czechoslovakia by the Warsaw Pact armies. 
              A longstanding rock club "Palach", a mainstay for alternative youth and a gathering place for free-minded people, 
              situated in my hometown of Rijeka, is named in his honor.
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