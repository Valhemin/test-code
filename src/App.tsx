import React from 'react';
import LayoutContainer from './containers/Layout/LayoutContainer';
import HomeContainer from './containers/Home/HomeContainer';

function App() {
  return (
    <body className="App">
      <LayoutContainer>
        <HomeContainer />
      </LayoutContainer>
    </body>
  );
}

export default App;
