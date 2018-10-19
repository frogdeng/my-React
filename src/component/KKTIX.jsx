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
            <div className="kktix">
              <div className="kktix_des">
              {
                data.map(function(eventdata){
                  return <div> 
                      <h6>{eventdata.kktix.serviceTitle}</h6> 
                      <h5>{eventdata.kktix.subName}</h5>
                      <p>{eventdata.kktix.serviceDescription}</p> 
                      
                      <div className="links">
                        <a href="">TAIWAN</a>
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
