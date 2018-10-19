import React, { Component } from 'react';
import Switch from './component/Switch';
import KKTIX from './component/KKTIX';
import Temperature from './component/Temperature';

import './component/venue.sass';


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Switch/> */}
        <Temperature/>

      </div>
     
    );
  }
}

export default App;
