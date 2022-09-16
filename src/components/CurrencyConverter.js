import React from "react";
import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";
import { Card, Col, Row } from 'react-bootstrap';

export default function CurrencyConverter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA", "DOGE", "DOT", "SOL", "BNB", "USDT", "EUR", "GBP", "JPY", "CNH", "CAD"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);


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
      url: 'http://localhost:3001/convert',
      params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
    };



    axios.request(options).then((response) => {
      console.log(response.data);

      setResult(response.data * amount);

      setExchangedData({
        primaryCurrency: chosenPrimaryCurrency,
        secondaryCurrency: chosenSecondaryCurrency,
        exchangeRate: response.data
      })
    }).catch((error) => {
      console.error(error);

    });

  };

  // left these console logs in for kicks. 
  console.log(chosenPrimaryCurrency);
  console.log(chosenSecondaryCurrency);
  console.log(amount);
  console.log(exchangedData);



  return (
    <div className="CurrencyConverter">
      <h2> Currency Converter </h2>
      <div className="input-box">
        <Col>
          <Card>
            <Row>
              <h3 className="primary">Primary Currency:</h3>
            </Row>
            <Row>
              {/* enter the amount of the primary currency */}
              <Col>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Col>
              {/* this selects the primary currency  */}
              <Col>
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
              </Col>
            </Row>
            {/* <br/> */}
            <Row className="secondary">
              <h3>Secondary Currency:</h3>
            </Row>
            <Row>
              {/* display of the conversion of the currency multiplied by the amount*/}
              <Col>
                <input
                  name="currency-amount-2"
                  value={result}
                  type='number'
                  disabled={true}
                />
                {(e) => setAmount(e.target.value)}
              </Col>
              {/* this is the menu for selecting secondary currency to compare against primary currency*/}
              <Col>
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
              </Col>
            </Row>

          </Card>
        </Col>
        {/* <br/> */}
        <button id="convert-button" onClick={convert}>Convert</button>
        <br />
      </div>
      <ExchangeRate
        exchangedData={exchangedData}
      />
    </div>
  );
}
