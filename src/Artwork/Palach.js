import React, { Component } from 'react';
import './Palach.css';
import '../Components/ArtDisplay'
import palach from '../assets/art/palach.jpg'
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              Jan Palach was a Czech student of history and political economy.  His self-immolation was a political protest against <br />
              the end of the Prague Spring resulting from the 1968 invasion of Czechoslovakia by the Warsaw Pact armies. <br />
              A longstanding rock club "Palach", a mainstay for alternative youth and a gathering place for free-minded people, <br />
              situated in my hometown of Rijeka, is named in his honor.
            </span>

class Palach extends Component {

  render() {
    return(
      <ArtDisplay title='Mountaineering Society Logo' client='P.D. Obruč - Jelenje' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image" src={palach} alt="Obruc-color"></img>
      </ArtDisplay>
    );
  }
}

export default Palach;