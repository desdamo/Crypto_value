// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Amount from 'src/components/Amount';
import Sparkline from 'src/components/Sparkline';
import List from 'src/components/List';

import 'semantic-ui-css/semantic.min.css';


// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Amount />
    <Sparkline />
    <List />
  </div>
);

// == Export
export default App;
