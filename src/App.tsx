import React from 'react';

import Layout from './components/Layout';

import GlobalStyle from './styles/Global';

const App: React.FC = function() {
  return (
      <>
        <Layout />

        <GlobalStyle />
      </>
  );
}

export default App;
