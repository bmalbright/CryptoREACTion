import React from 'react'

export default function ExchangeRate({exchangedData}) {
  return (
    <div className='ExchangeRate'>
       <h3> Exchange Rate: </h3>
        <h1>{exchangedData.exchangeRate}</h1>
        <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
    </div>
  )
}
