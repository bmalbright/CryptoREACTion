import React from 'react';
import CurrencyConverter from "./components/CurrencyConverter";
// import ExchangeRate from "./components/ExchangeRate";
import NewsFeed from "./components/NewsFeed";
import { Container, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <Container>
          <hi>Crypto REACTion</hi>
          <Card>
        <CurrencyConverter/>
        </Card>
        <Card>
        <NewsFeed/>
        </Card>
        </Container>
    </div>
  );
}

export default App;
