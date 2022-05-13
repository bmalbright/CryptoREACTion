import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
// import ExchangeRate from "./components/ExchangeRate";
import NewsFeed from "./components/NewsFeed";
import { Container, Card, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Col>
        <Card className="CryptoApp">
          <h1 className="title">Crypto REACTion</h1>
          {/* <h2 >A currency and crypto news dashboard</h2> */}
          {/* </Card>
          <Card> */}
            <CurrencyConverter />
          </Card>
          <Card>
            <NewsFeed />
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default App;
