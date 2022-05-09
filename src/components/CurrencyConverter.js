import React from "react";
import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

export default function CurrencyConverter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  // const [exchangeRate, setExchangeRate] = useState(0);
  // const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC');
  // const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('BTC');

  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: 'BTC',
    secondaryCurrency: 'BTC',
    exchangeRate: 0
  })
  const [result, setResult] = useState(0)

  const convert = () => {
// API call for the currency exchange
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      }
    };
    
    axios.request(options).then((response) => {
        console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        // setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
        // setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
        // setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
        })
      }).catch((error) => {
        console.error(error);
    });
  };

// left these console logs in for kicks. 
  console.log(chosenPrimaryCurrency);
  console.log(chosenSecondaryCurrency);
  console.log(amount);
  // console.log(exchangeRate)
  console.log(exchangedData);

  return (
    <div className="CurrencyConverter">
      <h2> CurrencyConverter </h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              {/* enter the amount of the primary currency */}
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              {/* this selects the primary currency  */}
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              {/* display of the conversion of the currency multiplied by the amount*/}
              <td>
                <input 
                name="currency-amount-2" 
                value={result} 
                type='number' 
                disabled={true}
                />
                onChange={(e) => setAmount(e.target.value)}
              </td>
              {/* this is the menu for selecting secondary currency to compare against primary currency*/}
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>Convert</button>
      </div>
      <ExchangeRate  
      exchangedData={exchangedData}
      // chosenPrimaryCurrency={primaryCurrencyExchanged}
      // chosenSecondaryCurrency={secondaryCurrencyExchanged}
      />
    </div>
  );
}
