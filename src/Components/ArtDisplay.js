import React, { Component } from 'react';
import './ArtDisplay.css';
import MediaQuery from 'react-responsive';


class Description extends Component {
  constructor() {
    super();
    this.handleLink = this.handleLink.bind(this);
    this.state = {
      isClicked: false
    }
  }

  handleLink() {
    let link = document.getElementById('info-link');
    link.innerHTML = (link.innerHTML === 'More information') ? 'Less' : 'More information';
    this.setState({isClicked : !this.state.isClicked});
  }

  render() {
    return (
      <React.Fragment>
        <div className="info-wrapper pl-5">
          <a href="javascript:void(0)" id="info-link" onClick={this.handleLink}>More information</a>
        </div>
        <div className={this.state.isClicked ? 'description-text pl-5 pt-3' : 'description-text description-text-hidden pl-5 pt-3'}>
          Mountaineering society logo I did for P.D. Obruč - Jelenje <br /> represents everything
          about me. <br /> It has cool slick lines, hills and even a nice lake. <br /> It's a very nice logo,
          I am very proud of it. Peace!
    </div>
      </React.Fragment>
    )
  } 
}


class ArtDisplay extends Component {
  render() {
    return(
      
      <div className="d-flex">
          <div className="d-flex flex-column">
            <div className="artwork-container text-left pl-5">
              {this.props.children}
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="description pl-5">

              <p> TITLE: {this.props.title}</p>
              <p> CLIENT: {this.props.client}</p>
              <p> YEAR: {this.props.year}</p>
              <p> TECHNIQUE: {this.props.technique}</p>

            </div>
            <Description />
          </div>
      </div>
    )
  }
}

export default ArtDisplay;