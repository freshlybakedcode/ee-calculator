import { render } from '@testing-library/react';
import { TopSection } from './TopSection';

describe('TopSection', () => {
  it('should render as expected', () => {
    const { container } = render(<TopSection />);
    expect(container).toMatchSnapshot();
  });
});
