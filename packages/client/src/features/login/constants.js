export const LOGIN_FIELDS = [
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    autoComplete: 'email',
    autoFocus: true,
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    autoComplete: 'current-password',
  },
];

export const REMEMBER_ME_FIELD = {
  id: 'rememberMe',
  name: 'rememberMe',
};

export const REQUEST_STATUSES = {
  SUCCESS: 'fulfilled',
  ERROR: 'rejected',
};
