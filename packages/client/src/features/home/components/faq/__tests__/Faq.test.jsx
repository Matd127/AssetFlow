import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Faq from '../Faq';

describe('Faq', () => {
  it('should render hero section', () => {
    const { container } = render(<Faq />);
    expect(container).toBeTruthy();
  });
});
