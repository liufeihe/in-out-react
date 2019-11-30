import React from 'react';
// import CounterPanel from './counterWithSmartDumb'
// import CounterPanel from './counterWithFlux'
import CounterPanel from './counterWithContext'
// import CounterPanel from './counterWithReactRedux'
import './App.css'

function App() {
  return (
    <div className="App">
      <CounterPanel />
    </div>
  );
}

export default App;
