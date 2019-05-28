import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='calculator-container'>
      <div className='calc-top'>
        <CalculatorDisplay text='0' />
      </div>
      <div className='buttons-all'>
        <div className='buttons-left'>
          <ActionButton btnType='action large' text='clear' />
          <div className='buttons-numbered'>

            <div className='row1'>
              <NumberButton btnType='number' text='7' />
              <NumberButton btnType='number' text='8' />
              <NumberButton btnType='number' text='9' />
            </div>

            <div className='row2'>
              <NumberButton btnType='number' text='4' />
              <NumberButton btnType='number' text='5' />
              <NumberButton btnType='number' text='6' />
            </div>

            <div className='row3'>
              <NumberButton btnType='number' text='1' />
              <NumberButton btnType='number' text='2' />
              <NumberButton btnType='number' text='3' />
            </div>

            <NumberButton btnType='number large' text='0' />
          </div>
        </div>
        <div className='action-buttons'>
          <ActionButton btnType='action' text='&div;' />
          <ActionButton btnType='action' text='&times;' />
          <ActionButton btnType='action' text='-' />
          <ActionButton btnType='action' text='+' />
          <ActionButton btnType='action' text='=' />
        </div>
      </div>
    </div>
  );
};


export default App;
