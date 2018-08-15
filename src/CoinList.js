import React, { Component } from 'react';
import Coin from './Coin'

class CoinList extends Component {
    render() {
        return (
            <tbody>
            {
                this.props.coins.map((coin, idx) => {
                    return <Coin rank={coin.rank} ticker={coin.name} price={coin.quotes.USD.price} id={coin.id} key={idx}/>
                })
            }
            </tbody>
        );
    }
}

export default CoinList;

