import { connect } from 'react-redux';
import { registerThunk } from 'shared/thunks/authThunks.js';

export const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  user: state.auth.user,
});

export const mapDispatchToProps = dispatch => ({
  register: credentials => dispatch(registerThunk(credentials)),
});

export const registerConnector = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
