import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormInput from '../FormInput.jsx';

describe('FormInput', () => {
  it('should render the component', () => {
    render(<FormInput />);
  });

  it('should render password visibility toggle when type is "password"', () => {
    render(<FormInput id="test-password" label="Password" type="password" value="" onChange={() => {}} />);

    const button = screen.getByLabelText('toggle password visibility');
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('VisibilityIcon')).toBeInTheDocument();
  });

  it('should toggle visibility icon on click', () => {
    render(<FormInput id="test-password" label="Password" type="password" value="" onChange={() => {}} />);

    const button = screen.getByLabelText('toggle password visibility');

    fireEvent.click(button);
    expect(screen.getByTestId('VisibilityOffIcon')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByTestId('VisibilityIcon')).toBeInTheDocument();
  });

  it('should not render visibility toggle when type is not "password"', () => {
    render(<FormInput id="test-email" label="Email" type="email" value="" onChange={() => {}} />);
    expect(screen.queryByLabelText('toggle password visibility')).not.toBeInTheDocument();
  });
});
