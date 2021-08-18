import { Calculator } from './components/Calculator';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  background: linear-gradient(to right, #1795d4, #2e9fd8);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <CalculatorWrapper>
      <Calculator />
    </CalculatorWrapper>
  );
}

export default App;
