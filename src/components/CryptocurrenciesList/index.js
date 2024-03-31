import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="cryptoList-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-image"
      />

      <ul className="crypto-items-list">
        <li className="list-header-items">
          <p className="list-heading">Coin Type</p>
          <div className="currency-type-div">
            <p className="list-heading">USD</p>
            <p className="list-heading">EURO</p>
          </div>
        </li>
        {cryptoList.map(crypto => (
          <CryptocurrencyItem crypto={crypto} key={crypto.id} />
        ))}
      </ul>
    </div>
  )
}
export default CryptocurrenciesList
