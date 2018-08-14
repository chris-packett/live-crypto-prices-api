### Requirements: 

- [ ] Fetch and display data from the endpoint: 'https://api.coinmarketcap.com/v2/ticker/?limit=20'
    - [ ] Fetch the id, name, ticker, rank, and price
    - [ ] Fetch the logo from the response's id: 'https://s2.coinmarketcap.com/static/img/coins/16x16/${coin.id}.png'
    - [ ] Display the name, ticker, rank, price, and logo
- [ ] SetInterval every 10000ms
    - [ ] Refresh the fetch data 
    - [ ] Update state
- [ ] Display updated state in a HTML table
    - [ ] Render table rows as child components for each currency

### Components:

* CryptoCurrency
    * CoinList
        * Coin

