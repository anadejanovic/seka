import React, { Component } from 'react';
import './Obruc.css';
import lemon from '../assets/art/limunada.jpg';
import lemon2 from '../assets/art/limunada-2.jpg';
import ArtDisplay from '../Components/ArtDisplay';

const Text = <span>
              The pop-up stickers were part of the event "Gledaj (u)druge" which promotes
               different associations and their courageous work to make post-industrial town of Rijeka
               in Croatia alive once again. As it is lemonade from Rijeka, which is statistically known 
               to be the rainiest city in Croatia...
              the idea for the design just imposed by itself. Lemon + rain = lemonade! At least in Rijeka! 
            </span>

class Lemonade extends Component {

  render() {
    return(
      <ArtDisplay title='Lemonade' client='Urbani Separe' year='2018' technique='Mixed media' text={Text}>
        <img className="block-image mx-auto mb-5" src={lemon} alt=""></img>
        <img className="block-image mx-auto mb-5" src={lemon2} alt=""></img>
      </ArtDisplay>
    );
  }
}

export default Lemonade;