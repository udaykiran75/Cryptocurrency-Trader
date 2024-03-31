import './index.css'

const CryptocurrencyItem = props => {
  const {crypto} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = crypto

  return (
    <li className="list-item-container">
      <div className="logo-name-div">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="list-div">
        <p className="values">{usdValue}</p>
        <p className="values">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
