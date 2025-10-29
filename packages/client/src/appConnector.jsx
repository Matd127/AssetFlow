import React, { useEffect, forwardRef } from 'react';
import { connect } from 'react-redux';
import { getUserThunk } from 'shared/thunks/authThunks.js';

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUserThunk()),
});

/* eslint-disable no-unused-vars */
export const withUser = WrappedComponent => {
  const WithUserComponent = forwardRef(({ getUser, user, ...props }, ref) => {
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token && !user) getUser();
    }, [getUser, user]);

    return <WrappedComponent ref={ref} user={user} {...props} />;
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithUserComponent);
};
