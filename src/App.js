import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './Containers/Header';
import Sidebar from './Containers/Sidebar';
import Artwork from './Containers/Artwork';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Obruc from './Artwork/Obruc';
import Palach from './Artwork/Palach';
import Dubrovnik from './Artwork/Dubrovnik';
import Astronaut from './Artwork/astronaut';
import Crow from './Artwork/crow';
import Overeating from './Artwork/overeating';
import Pigs from './Artwork/pigs';
import Taurus from './Artwork/taurus';
import Lemonade from './Artwork/lemonade';
import Leftovers from './Artwork/leftovers';
import Ucka from './Artwork/ucka';
import Overthinking from './Artwork/overthinking';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <main className="content">
          <Route exact path="/seka" component={Artwork} />
          <Route exact path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Obruc" component={Obruc} />
          <Route path="/Palach" component={Palach} />
          <Route path="/Dubrovnik" component={Dubrovnik} />
          <Route path="/overeating" component={Overeating} />
          <Route path="/pigs" component={Pigs} />
          <Route path="/taurus" component={Taurus} />
          <Route path="/lemonade" component={Lemonade} />
          <Route path="/crow" component={Crow} />
          <Route path="/astronaut" component={Astronaut} />
          <Route path="/leftovers" component={Leftovers} />
          <Route path="/ucka" component={Ucka} />
          <Route path="/overthinking" component={Overthinking} />
        </main>
      </div>
    );
  }
}

export default App;
