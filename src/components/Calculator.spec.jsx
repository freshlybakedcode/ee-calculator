import { fireEvent, render } from '@testing-library/react';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  let buttonOne,
    buttonTwo,
    buttonAdd,
    buttonSubtract,
    buttonEquals,
    buttonC,
    buttonCE,
    buttonDecimal,
    output;

  beforeEach(() => {
    const { getByRole, getByTestId } = render(<Calculator />);
    buttonOne = getByRole('button', {
      name: /1/,
    });
    buttonTwo = getByRole('button', {
      name: /2/,
    });
    buttonAdd = getByRole('button', {
      name: /\+/,
    });
    buttonSubtract = getByRole('button', {
      name: /-/,
    });
    buttonEquals = getByRole('button', {
      name: /=/,
    });
    buttonC = getByRole('button', {
      name: /^C$/,
    });
    buttonCE = getByRole('button', {
      name: /CE/,
    });
    buttonDecimal = getByRole('button', {
      name: /\./,
    });
    output = getByTestId('calculator-screen');
  });

  const onePlusOne = () => {
    fireEvent.click(buttonOne);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonOne);
  };

  it('should render as expected', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  describe('Operation', () => {
    it('should be able to add two numbers together and display the output', () => {
      onePlusOne();
      fireEvent.click(buttonEquals);
      expect(output).toHaveTextContent('2');
    });
    it('should change the last operator if the most recent entry in the current sum is an operator but a new operator is chosen by the user', () => {
      fireEvent.click(buttonTwo);
      fireEvent.click(buttonAdd);
      fireEvent.click(buttonSubtract);
      fireEvent.click(buttonOne);
      fireEvent.click(buttonEquals);
      expect(output).toHaveTextContent('1');
    });
    it('should perform evaluation on the sum if there is already an operator in the current sum, the last character in the current sum is not an operator, and the user chooses an additional operator', () => {
      fireEvent.click(buttonTwo);
      fireEvent.click(buttonAdd);
      fireEvent.click(buttonOne);
      fireEvent.click(buttonSubtract);
      expect(output).toHaveTextContent('3');
    });
  });

  describe('Clear functions', () => {
    it('should reset to 0 when the clear button is pressed', () => {
      onePlusOne();
      fireEvent.click(buttonC);
      expect(output).toHaveTextContent('0');
    });

    it('should clear only the current entry when the Clear Entry button is pressed', () => {
      onePlusOne();
      fireEvent.click(buttonCE);
      expect(output).toHaveTextContent('0');
      fireEvent.click(buttonTwo);
      fireEvent.click(buttonEquals);
      expect(output).toHaveTextContent('3');
    });
  });

  describe('Decimal functions', () => {
    it('should be able to add a decimal', () => {
      fireEvent.click(buttonOne);
      fireEvent.click(buttonDecimal);
      fireEvent.click(buttonTwo);
      expect(output).toHaveTextContent('1.2');
    });
    it('should not be able to add multiple decimal points to the same number', () => {
      fireEvent.click(buttonOne);
      fireEvent.click(buttonDecimal);
      fireEvent.click(buttonDecimal);
      fireEvent.click(buttonTwo);
      fireEvent.click(buttonDecimal);
      expect(output).toHaveTextContent('1.2');
    });
  });

  describe('Inputs', () => {
    it('should remove the zero when adding a number if the only entry is a zero', () => {
      expect(output).toHaveTextContent('0');
      fireEvent.click(buttonOne);
      expect(output).toHaveTextContent('1');
    });
    it('should clear the display after an operator is selected and a new digit is entered', () => {
      fireEvent.click(buttonOne);
      fireEvent.click(buttonAdd);
      fireEvent.click(buttonTwo);
      expect(output).toHaveTextContent('2');
    });
  });
});
