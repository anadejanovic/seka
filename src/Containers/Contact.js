import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return(
      <div className="contact pt-4">
        <div className="row text-left mt-5">
          <div className="col-2">&nbsp;</div>
          <div className="col-10">
            <h3 className="info-label"> e-mail</h3> <br />
            <p>ana.dejanovich@gmail.com</p> <br /> <br />
          </div>
        </div>
        <div className="row text-left">
          <div className="col-2">&nbsp;</div>
          <div className="col-10">
            <h3 className="info-label"> social media</h3>
            <div className="fa-icons">
              <a href="javascript:void(0);" onClick={() => window.open("https://www.instagram.com/anushka.draws")}>
                <i className="fa fa-instagram fa-2x"></i>
              </a> 
              <a href="javascript:void(0);" onClick={() => window.open("https://www.behance.net/anadejanovic")}>
                <i className="fa fa-behance fa-2x"></i>
              </a>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;