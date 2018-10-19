import React, { Component } from 'react';
import earth from '../img/event.jpg';
import data from '../data/data.json';
export default class Venue extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div>
          <div className="wrapper">
            <div className="top_block"></div>
            <div className="layout_a">
              <div className="photo">
                <img src={earth} alt=""/>
              </div>
              <div className="des">
                {
                data.map(function(eventdata){
                  return <div> 
                      <h6>{eventdata.event.serviceTitle}</h6> 
                      <h5>{eventdata.event.subName}</h5>
                      <p>{eventdata.event.serviceDescription}</p> 
                      
                      <div className="links">
                        <a href="">TAIWAN</a>
                        <a href="">HONG KONG</a>
                        <a href="">SOUTHEAST ASIA</a>
                    </div>
                    </div>
                })
              }
              </div>
            </div>
          </div>
      </div> 

    );
  }
}
