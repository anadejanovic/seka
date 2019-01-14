import React, { Component } from 'react';
import pic from './../assets/about.jpg'
import './About.css';

class Contact extends Component {
  render() {
    return(
      <div className="about mt-5 pt-4">
        <div className="row">
          <div className="col-2">&nbsp;</div>
          <div className="col-8">
            <p className="about-desk">Illustrator. Occasional photographer.  <br/><br/>
              Born in Yugoslavia. Raised in Croatia. Based in Rijeka. Lived in Zagreb and Berlin.  <br/><br/>
              Proud owner of a canine trash can named Frida.<br/><br/> 
              <strong>OPENED FOR COLLABORATIONS, COMMISSIONS &amp; INTERESTING PROJECTS!</strong>           
            </p>
            <div>
              <img src={pic} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;