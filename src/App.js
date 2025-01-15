import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Headers';
import Home from './components/Home';

const  App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
