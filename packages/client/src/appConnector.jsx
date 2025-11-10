import React, { useEffect, forwardRef } from 'react';
import { connect } from 'react-redux';
import { getUserThunk } from 'shared/thunks/authThunks.js';
import { getToken } from 'shared/utils/getToken.js';
import { logout } from 'shared/slices/authSlice.js';

const mapStateToProps = state => ({
  user: state?.auth?.user,
  loading: state?.auth?.loading,
  error: state?.auth?.error,
  isAuthenticated: (state?.auth?.user && getToken()) || false,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUserThunk()),
  logout: () => dispatch(logout()),
});

/* eslint-disable no-unused-vars */
export const withUser = WrappedComponent => {
  const WithUserComponent = forwardRef(({ getUser, user, ...props }, ref) => {
    useEffect(() => {
      getUser();
    }, []);

    return <WrappedComponent ref={ref} user={user} {...props} />;
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithUserComponent);
};
