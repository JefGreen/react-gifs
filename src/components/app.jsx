import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="drON1hl3kv9hm"/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
