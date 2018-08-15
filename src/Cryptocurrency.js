import React, { Component } from 'react';
import CoinList from './CoinList';

class Cryptocurrency extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listOfCoins: [],
      lastUpdateTime: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      let _url = `https://api.coinmarketcap.com/v2/ticker/?limit=20`
      fetch(_url)
      .then(resp => resp.json())
      .then(coinsData => {
        const coins = coinsData.data
        let coinObjects = []
        for (let coin in coins) {
          coinObjects.push(coins[coin])
        }
        this.setState({
          listOfCoins: coinObjects,
          lastUpdateTime: new Date()
        })
      })
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }


  render() {
    return (
      <div className="crypto-table">
        <h1 className="text-shadow nice-color">Crypto Prices API</h1>
        <table>
          <caption id="other-nice-color">Crypto Price Tracker</caption>
          <tbody>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Ticker</th>
              <th scope="col">Price</th>
            </tr>
          <CoinList coins={this.state.listOfCoins}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cryptocurrency;
