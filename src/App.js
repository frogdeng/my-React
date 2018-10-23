import React, { Component } from 'react';
import Switch from './component/Switch';
import KKTIX from './component/KKTIX';
import Calculator from './component/Temperature';

import './component/venue.sass';


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Switch/> */}
        <Calculator scale="c"/>
        <Calculator scale="f"/>

      </div>
     
    );
  }
}

export default App;
