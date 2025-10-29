export const REGISTER_FIELDS = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    required: true,
    autoFocus: true,
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    autoComplete: 'email',
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    required: true,
  },
];
