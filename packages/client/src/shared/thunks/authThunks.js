import { createAsyncThunk } from '@reduxjs/toolkit';
import loginMutation from './loginMutation.graphql';
import registerMutation from './registerMutation.graphql';
import getUserQuery from './getUserQuery.graphql';
import graphqlClient from 'shared/api/graphqlClient.js';
import { normalizeKeys } from 'shared/utils/normalizeKeys.js';

export const loginThunk = createAsyncThunk('auth/login', async ({ email, password }) => {
  const { data } = await graphqlClient.mutate({
    mutation: loginMutation,
    variables: { email, password },
  });
  return normalizeKeys(data?.login);
});

export const registerThunk = createAsyncThunk('auth/register', async ({ email, password, role, first_name, last_name }) => {
  const { data } = await graphqlClient.mutate({
    mutation: registerMutation,
    variables: { email, password, role, first_name, last_name },
  });
  return data?.register;
});

export const getUserThunk = createAsyncThunk('auth/getUser', async () => {
  const result = await graphqlClient.query({
    query: getUserQuery,
    fetchPolicy: 'no-cache',
  });
  return normalizeKeys(result?.data?.me);
});
