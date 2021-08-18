import React from 'react';

import styled from 'styled-components';

const KeypadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 30px 30px 30px;
  border-top: 1px solid black;
`;

const Button = styled.button`
  align-items: center;
  background: ${(props) =>
    props.clear
      ? `linear-gradient(85deg, #faa26c 0%, #f2803a 15%)`
      : `linear-gradient(261deg, #d4d4d4 1%, #fffeff 13%)`};
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 3px -1px #111;
  color: ${(props) => (props.clear ? 'white' : '#333')};
  cursor: pointer;
  display: flex;
  font-size: 1em;
  font-weight: bold;
  justify-content: center;
  margin: 10px 5px;
  padding: 5px;
  width: calc(25% - 10px);
`;

const Spacer = styled.div`
  display: flex;
  width: 50%;
`;

export const Keypad = ({ handleKeypadPress }) => {
  return (
    <KeypadWrapper>
      <Button clear data-operator="clear" onClick={handleKeypadPress}>
        C
      </Button>
      <Button clear data-operator="clearEntry" onClick={handleKeypadPress}>
        CE
      </Button>
      <Spacer />

      <Button onClick={handleKeypadPress}>7</Button>
      <Button onClick={handleKeypadPress}>8</Button>
      <Button onClick={handleKeypadPress}>9</Button>
      <Button data-operator="divide" onClick={handleKeypadPress}>
        ÷
      </Button>

      <Button onClick={handleKeypadPress}>4</Button>
      <Button onClick={handleKeypadPress}>5</Button>
      <Button onClick={handleKeypadPress}>6</Button>
      <Button data-operator="multiply" onClick={handleKeypadPress}>
        ×
      </Button>

      <Button onClick={handleKeypadPress}>1</Button>
      <Button onClick={handleKeypadPress}>2</Button>
      <Button onClick={handleKeypadPress}>3</Button>
      <Button data-operator="subtract" onClick={handleKeypadPress}>
        -
      </Button>

      <Button onClick={handleKeypadPress}>0</Button>
      <Button data-operator="decimal" onClick={handleKeypadPress}>
        .
      </Button>
      <Button data-operator="equals" onClick={handleKeypadPress}>
        =
      </Button>
      <Button data-operator="add" onClick={handleKeypadPress}>
        +
      </Button>
    </KeypadWrapper>
  );
};
