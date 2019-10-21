import React from 'react';
import './style/App.scss';
import App_Header from './components/App_Header.jsx'
import App_Body from './components/App_Body.jsx'
import App_Footer from './components/App_Footer.jsx'

function App() {
  return (
    <div className="App">
		  <App_Header />
		  <App_Body />
		  <App_Footer />

    </div>
  );
}

export default App;
