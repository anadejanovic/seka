import React, { Component } from 'react';
import './Artwork.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import astronaut from  '../assets/art/astronaut.jpg';
import bik from '../assets/art/bik.jpg';
import dubrovnik from '../assets/art/dubrovnik.jpg';
import limunada from '../assets/art/limunada.jpg';
import pasta from '../assets/art/noodles.jpg';
import obruc from '../assets/art/obruc-color.jpg';
import overthinking from '../assets/art/overthinking.jpg';
import palach from '../assets/art/palach.jpg';
import prasac from '../assets/art/prasac-2.jpg';
import srce from '../assets/art/srce.jpg';
import ucka from '../assets/art/ucka.jpg';
import vrana from '../assets/art/vrana.jpg';

const GridImage = (prop) => {
  return(
    <div className="col-lg-6 col-md-12 grid-image text-center">
      <div className="art-container">
       <LazyLoad>
         <Link to="/obruc">
           <img className="art-image" src={prop.src} alt={prop.name}/>
           <p className="image-title mt-1">{prop.name}</p>
        </Link>
       </LazyLoad>
      </div>
    </div>
  );
}

const GridRow = (prop) => {
  return(
    <div className="row mb-4 mx-0">
      <div className="col-md-1 d-sm-none d-md-block">&nbsp;</div>
      <div className="col-md-9 col-sm-12 row align-items-center mx-0">{prop.children}</div>
      <div className="col-md-3 d-md-none d-lg-block ">&nbsp;</div>
    </div>    
  )
}

class Artwork extends Component {
  render() {
    return(
      <div className="artwork">
        <GridRow>
          <GridImage src={palach} name="Jan Palach" />
          <GridImage src={pasta} name="OVEReating" />
        </GridRow>
        <GridRow>
          <GridImage src={obruc} name="P.D. Obruč - Jelenje" />
          <GridImage src={prasac} name="Orwell's Pigs" />
        </GridRow>
        <GridRow>
          <GridImage src={bik} name="Taurus Moon" />
          <GridImage src={dubrovnik} name="Roofs of Dubrovnik" />
        </GridRow>
        <GridRow>
          <GridImage src={limunada} name="Rijeka's Lemonade" />
          <GridImage src={vrana} name="Crow and poppies" />
        </GridRow>
        <GridRow>
          <GridImage src={astronaut} name="Floating astronaut" />
          <GridImage src={srce} name="Leftovers" />
        </GridRow>
        <GridRow>
          <GridImage src={ucka} name="Učka Mountain" />
          <GridImage src={overthinking} name="Overthinking" />
        </GridRow>
      </div>
    );
  }
}

export default Artwork;