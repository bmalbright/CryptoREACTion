import React from 'react'

export default function ExchangeRate({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) {
  return (
    <div className='ExchangeRate'>
       <h3> Exchange Rate: </h3>
        <h1>{exchangeRate}</h1>
        <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
    </div>
  )
}
