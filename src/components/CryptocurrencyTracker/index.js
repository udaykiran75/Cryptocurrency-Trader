import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptoList: [],
  }

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const {isLoading, cryptoList} = this.state

    const request = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const response = await request.json()

    const formatedData = response.map(crypto => ({
      currencyName: crypto.currency_name,
      usdValue: crypto.usd_value,
      euroValue: crypto.euro_value,
      id: crypto.id,
      currencyLogo: crypto.currency_logo,
    }))

    this.setState({isLoading: false, cryptoList: formatedData})
    console.log(cryptoList)
  }

  render() {
    const {isLoading, cryptoList} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoList={cryptoList} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
