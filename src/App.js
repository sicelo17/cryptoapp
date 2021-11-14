import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="coin__app">
      <div className="coin__search">
        <h1 className="coin__text">
          Search a Currency
        </h1>
        <form>
          <input type="text" placeholder="Search" className="coin__input"/>
        </form>
      </div>

      
    </div>
  );
}

export default App;
