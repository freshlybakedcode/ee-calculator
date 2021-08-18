import React, { useState } from 'react';
import styled from 'styled-components';

import { TopSection } from './TopSection';
import { CalculatorScreen } from './CalculatorScreen';
import { Keypad } from './Keypad';

import { convertOperator } from '../utils/convertOperator';
import { isMathmaticalOperator } from '../utils/isMathmaticalOperator';
import { evaluateSum } from '../utils/evaluateSum';
import { clearEntry } from '../utils/clearEntry';

const Chassis = styled.div`
  box-shadow: 3px 2px 12px 0px #333;
  overflow: hidden;
  background: linear-gradient(to right, #6d6678 0%, #352e40 5%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 300px;
`;

export const Calculator = () => {
  const [currentSum, setCurrentSum] = useState('');
  const [displayedDigits, setDisplayedDigits] = useState('0');

  const handleEquals = () => {
    if (
      currentSum !== '' &&
      !isMathmaticalOperator(currentSum.charAt(currentSum.length - 1))
    ) {
      const returnedAnswer = evaluateSum(currentSum);
      setCurrentSum(returnedAnswer);
      setDisplayedDigits(returnedAnswer);
    }
  };

  const handleClear = (clear) => {
    if (clear === 'C') {
      setCurrentSum('');
      setDisplayedDigits('0');
    } else {
      setCurrentSum(clearEntry(currentSum));
      setDisplayedDigits('0');
    }
  };

  const handleDecimal = () => {
    if (displayedDigits.indexOf('.') === -1) {
      setDisplayedDigits(displayedDigits + '.');
      setCurrentSum(currentSum + '.');
    }
  };

  const handleOperator = (operator) => {
    if (operator === '=') {
      // if the equals is pressed then evaluate sum
      handleEquals();
    } else if (operator === '.') {
      handleDecimal();
    } else if (operator === 'C' || operator === 'CE') {
      handleClear(operator);
    } else if (
      isMathmaticalOperator(currentSum.charAt(currentSum.length - 1))
    ) {
      // if the most recent entry in the currentSum is an operator then change the exisiting operator to the newly pressed one
      setCurrentSum(currentSum.slice(0, currentSum.length - 1) + operator);
    } else if (
      isMathmaticalOperator(currentSum.slice(0, currentSum.length - 1))
    ) {
      // if this is the second operator used in the buffer, then evaluate and then add the next operator
      handleEquals();
      setCurrentSum(currentSum + convertOperator(operator));
    } else {
      if (currentSum !== '') {
        setCurrentSum(currentSum + convertOperator(operator));
      }
    }
  };

  const handleNumericalInput = (newDigit) => {
    // if the only entry is a zero then remove the zero
    if (displayedDigits === '0' && currentSum === '') {
      setDisplayedDigits(newDigit);
      setCurrentSum(newDigit);
    } else if (
      isMathmaticalOperator(
        convertOperator(currentSum.charAt(currentSum.length - 1))
      )
    ) {
      // clear display when proceeding after an operator
      setDisplayedDigits(newDigit);
      setCurrentSum(currentSum + newDigit);
    } else {
      setDisplayedDigits(displayedDigits + newDigit);
      setCurrentSum(currentSum + newDigit);
    }
  };

  const handleKeypadPress = (e) => {
    const buttonPressed = e.target.innerHTML;
    const operator = e.target.dataset.operator;
    operator
      ? handleOperator(buttonPressed)
      : handleNumericalInput(buttonPressed);
  };

  return (
    <Chassis>
      <TopSection />
      <CalculatorScreen display={displayedDigits} />
      <Keypad handleKeypadPress={handleKeypadPress} />
    </Chassis>
  );
};
