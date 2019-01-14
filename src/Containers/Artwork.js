import React, { Component } from 'react';
import './Artwork.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import astronaut from  '../assets/art/astronaut.jpg';
import bik from '../assets/art/bik.jpg';
import dubrovnik from '../assets/art/dubrovnik-2.jpg';
import limunada from '../assets/art/limunada.jpg';
import pasta from '../assets/art/noodles.jpg';
import obruc from '../assets/art/obruc-color.jpg';
import overthinking from '../assets/art/overthinking.jpg';
import palach from '../assets/art/palach.jpg';
import prasac from '../assets/art/prasac-2.jpg';
import srce from '../assets/art/srce.jpg';
import ucka from '../assets/art/ucka.jpg';
import vrana from '../assets/art/vrana.jpg';
import paprika from '../assets/art/paprika.jpg';

const GridImage = (prop) => {
  return(
    <div className="col-xl-6 col-lg-12 grid-image text-center">
      <div className="art-container">
      <LazyLoad throttle={200}>  
         <Link to={prop.qlink}>
           <img className="art-image" src={prop.src} alt=""/>
           <p className="image-title mt-1 mb-4 ">{prop.name}</p>
        </Link>
      </LazyLoad>
      </div>
    </div>
  );
}

const GridRow = (prop) => {
  return(
      <div className="row mx-0">
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
          <GridImage src={paprika} qlink="/paprika" name="Paprika Birthday Cake" />
          <GridImage src={palach} qlink="/palach" name="Jan Palach" />
        </GridRow>
        <GridRow>
          <GridImage src={pasta} qlink="/overeating" name="OVEReating" />
          <GridImage src={obruc} qlink="/obruc" name="Grobnik Alps" />
        </GridRow>
        <GridRow>
          <GridImage src={prasac} qlink="/pigs" name="Orwell's Pigs" />
          <GridImage src={astronaut} qlink="/astronaut" name="Floating astronaut" />
        </GridRow>
        <GridRow>
          <GridImage src={dubrovnik} qlink="/dubrovnik" name="Roofs of Dubrovnik" />
          <GridImage src={bik} qlink="/taurus" name="Taurus Moon" />
        </GridRow>
        <GridRow>
          <GridImage src={vrana} qlink="/crow" name="Crow and poppies" />
          <GridImage src={ucka} qlink="/ucka" name="Učka Mountain" />
        </GridRow>
        <GridRow>
          <GridImage src={overthinking} qlink="/overthinking" name="Overthinking" />
          <GridImage src={limunada} qlink="/lemonade" name="Rijeka's Lemonade" />
        </GridRow>
        <GridRow>
          <GridImage src={srce} qlink="/leftovers" name="Leftovers" />
        </GridRow>
      </div>
    );
  }
}

export default Artwork;