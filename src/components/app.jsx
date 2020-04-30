import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "fcIeSjxlIhWEg" },
        { id: "4Nmo4QxNEeeKaK8pUk" }
      ],
      selectedGifId: "drON1hl3kv9hm"
    };

    this.search('Homer thinking');
  }

  search = (query) => {
    giphy('HjsYTi4BWQYuM9Fc5QkuDDPuEDdnMV6K').search({
      q: query,
      rating: 'g'
    }, function (error, result) {
      console.log(result);
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
