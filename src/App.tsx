import React from 'react';
import './App.css';
import CalculatorLayout from './layout/calculatorLayout';
import Header from './components/molecules/header';
import Display from './components/organisms/display';
function App() {
  return (
      <div className="App">
          <CalculatorLayout>
              <Header />
              <Display />
          </CalculatorLayout>
      </div>
  );
}

export default App;
