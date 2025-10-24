import { connect } from 'react-redux';
import { loginThunk } from 'features/auth/services/authThunks.js';

export const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  user: state.auth.user,
});

export const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(loginThunk(credentials)),
});

export const withAuth = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
