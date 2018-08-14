import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="crypto-table">
        <h1 className="text-shadow nice-color">Crypto Prices API</h1>
        <table>
          <caption id="other-nice-color">Crypto Price Tracker</caption>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Ticker</th>
            <th scope="col">Price</th>
          </tr>
          <tr>
            <th scope="row">#1</th>
            <td>BTC <span><img src="https://s2.coinmarketcap.com/static/img/coins/16x16/1.png" /></span></td>
            <td>$6,192.22</td>
        </tr>
        <tr>
            <th scope="row">#2</th>
            <td>ETH <span><img src="https://s2.coinmarketcap.com/static/img/coins/16x16/2.png" /></span></td>
            <td>$260.06</td>
        </tr>
        <tr>
            <th scope="row">#3</th>
            <td>XRP <span><img src="https://s2.coinmarketcap.com/static/img/coins/16x16/3.png" /></span></td>
            <td>$0.26</td>
        </tr>
          {/* <CoinList /> */}
        </table>
      </div>
    );
  }
}

export default App;
