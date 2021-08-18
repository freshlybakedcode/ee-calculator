import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render as expected displaying the number 0', () => {
    const { container, getByTestId } = render(<App />);
    expect(getByTestId('calculator-screen').textContent).toBe('0');
    expect(container).toMatchSnapshot();
  });
});
