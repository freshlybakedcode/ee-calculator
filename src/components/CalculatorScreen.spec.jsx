import { render } from '@testing-library/react';
import { CalculatorScreen } from './CalculatorScreen';

describe('CalculatorScreen', () => {
  it('should render as expected and output the received props', () => {
    const { container, getByTestId } = render(
      <CalculatorScreen display="100" />
    );
    expect(container).toMatchSnapshot();
    expect(getByTestId('calculator-screen').textContent).toBe('100');
  });
});
