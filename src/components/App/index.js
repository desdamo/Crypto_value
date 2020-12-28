// == Import npm
import React, { useEffect, useState } from 'react';
import Header from 'src/components/Header';
import Amount from 'src/components/Amount';
import Sparkline from 'src/components/Sparkline';
import List from 'src/components/List';

import 'semantic-ui-css/semantic.min.css';

// Import de Axios
import axios from 'axios';

// == Import
import './styles.css';

// == Composant
const App = () => {
  //definition des useStates
  const [crypto, setCrypto] = useState([]);
  const [spark, setSpark] = useState([]);
  const [sparklineValue, setSparklineValue] = useState(0);
  const [amountValue, setAmountValue] = useState(0);
  const [nameValue, setNameValue] = useState(0);
  const [convert, setConvert] = useState([]);

  const headerApi = {
    'x-access-token': 'coinranking0ab0ccb6eba5ebece0d8c945d3e99f326d9b5f24361240c0',
  };

  const handleClick = event => {
    setSparklineValue(event.target.value);
    console.log('click value', event.target.value);
    setAmountValue((event.target.value)-1);
    console.log(amountValue);
    setNameValue((event.target.value)-1);
  };

  const handleClickCurrency = event => {
    setConvert((event.target.value)*amountValue);
    console.log('value du click sur la value:', (event.target.value));
  };

  // Mise en place de Axios
  useEffect(() => {
    console.log('Mise en place de la requete axios');
    const promise = axios.get('https://api.coinranking.com/v2/coins/', headerApi);

    promise
      .then((response) => {
        console.log(response.data.data.coins);
        setCrypto(response.data.data.coins);
        console.log(response.data.data.coins[`${sparklineValue}`].sparkline);
        setSpark(response.data.data.coins[`${sparklineValue}`].sparkline);
        console.log('value de line:', sparklineValue);
        setAmountValue(response.data.data.coins[`${amountValue}`].price);
        console.log('value de l amount:', amountValue);
        setNameValue(response.data.data.coins[`${amountValue}`].name);
        console.log('reception des crypto');
      })
      .catch((error) => {
        console.log('error:', error);
      })
      .finally(() => {
        console.log('passage dans le finally de la promise');
      });
  },[sparklineValue]);

  return (
    <div className="app">
      <Header />
      <Amount currencyValue={amountValue} currencyName={nameValue} currencies={convert} clickCurrency={handleClickCurrency} />
      <Sparkline spark={spark} />
      <List lists={crypto} click={handleClick} />
    </div>
  );
};

// == Export
export default App;
