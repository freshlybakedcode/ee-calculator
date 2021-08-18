import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Screen = styled.div`
  align-content: space-between;
  background: linear-gradient(to right, #6d6678 0%, #000000 5%);
  border-bottom: 1px solid #2c2536;
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px 10px 0 10px;
`;

const Branding = styled.div`
  background-color: #f9fcff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 25px;
  padding: 5px;
`;

const Result = styled.span`
  color: #7eedf4;
  display: flex;
  font-family: 'LCD-normal';
  font-size: 2.3em;
  justify-content: flex-end;
  letter-spacing: 4px;
  margin-top: 15px;
  text-shadow: #a9f8fd 0px 0px 2px;
`;

export const CalculatorScreen = ({ display }) => (
  <Screen>
    <Branding>
      <Logo src={logo} alt="[=]" />
    </Branding>
    <Result data-testid="calculator-screen">{display}</Result>
  </Screen>
);
