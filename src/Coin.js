import React, { Component } from 'react';

class Coin extends Component {
    render() {
        const baseURL = 'https://s2.coinmarketcap.com/static/img/coins/16x16/'
        let img_ext = '.png'
        return (
            <tr>
                <th scope="row">#{this.props.rank}</th>
                <td>{this.props.ticker} <span><img src={baseURL + this.props.id + img_ext} alt="icon"/></span></td>
                <td>${this.props.price}</td>
            </tr>
        );
    }
}

export default Coin;
