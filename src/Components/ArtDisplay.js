import React, { Component } from 'react';
import './ArtDisplay.css';
import Media from 'react-media';

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
        <div className="info-wrapper mx-5">
          <a href="javascript:void(0)" id="info-link" onClick={this.handleLink}>More information</a>
        </div>
        <div className={this.state.isClicked ? 'description-text mx-5 mb-5 pt-3 d-block' : 'description-text description-text-hidden  pl-5 pt-3'}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  } 
}


class ArtDisplay extends Component {
  render() {
    return(     
      <div className="d-flex">
      <Media query="(min-width: 1400px)">
      {matches => matches ? (
        <React.Fragment>
        <div className="d-flex flex-column">
          <div className="artwork-container text-left mx-5">
            {this.props.children}
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="description mx-5">

            <p> TITLE: {this.props.title}</p>
            <p> CLIENT: {this.props.client}</p>
            <p> YEAR: {this.props.year}</p>
            <p> TECHNIQUE: {this.props.technique}</p>

          </div>
          <Description>
            {this.props.text}
          </Description>
        </div>
        </React.Fragment>
      ) : (
        <div className="d-flex flex-column w-100  pt-5">
          <div className="description mx-5 mb-5 mt-1">

            <p> TITLE: {this.props.title}</p>
            <p> CLIENT: {this.props.client}</p>
            <p> YEAR: {this.props.year}</p>
            <p> TECHNIQUE: {this.props.technique}</p>

          </div>
          <div className="artwork-container text-center">
            {this.props.children}
          </div>
          <Description>
            {this.props.text}
          </Description>
        </div>
      ) }
        </Media>
      </div>
    )
  }
}

export default ArtDisplay;