import { fireEvent, render } from '@testing-library/react';
import { Keypad } from './Keypad';

const mockHandleKeypadPress = jest.fn();

describe('Keypad', () => {
  it('should render as expected', () => {
    const { container } = render(<Keypad />);
    expect(container).toMatchSnapshot();
  });
  it('should call handleKeyPress() on each button press', () => {
    const { getAllByRole } = render(
      <Keypad handleKeypadPress={mockHandleKeypadPress} />
    );
    const buttons = getAllByRole('button');
    buttons.forEach((button) => fireEvent.click(button));
    expect(mockHandleKeypadPress).toHaveBeenCalledTimes(18);
  });
});
