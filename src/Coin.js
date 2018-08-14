import React, { Component } from 'react';

class Coin extends Component {
    render() {
        return (
            <tr>
                <th scope="row">#1</th>
                <td>BTC <span><img src="https://s2.coinmarketcap.com/static/img/coins/16x16/1.png" alt="icon"/></span></td>
                <td>$6,192.22</td>
            </tr>
        );
    }
}

export default Coin;
