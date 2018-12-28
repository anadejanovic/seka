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
        </main>
      </div>
    );
  }
}

export default App;