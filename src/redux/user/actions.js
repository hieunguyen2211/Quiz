import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const UserTypes = makeConstantCreator(
  'LOGIN',
  'LOGIN_USER_FAIL',
  'LOGIN_USER_SUCCESS',
  'REGISTER',
  'REGISTER_USER_FAIL',
  'REGISTER_USER_SUCCESS',
  'VERIFY',
  'VERIFY_USER_FAIL',
  'VERIFY_USER_SUCCESS',
  'LOGOUT',
  'GET_CURRENT_USER',

  'GET_LIST_USER',
  'GET_LIST_USER_SUCCESS',

  'GET_TOP_CONTRIBUTE',
  'GET_TOP_CONTRIBUTE_SUCCESS',
);

// Login
export const loginAction = (params) =>
  makeActionCreator(UserTypes.LOGIN, { params });
export const loginSuccessAction = (response) =>
  makeActionCreator(UserTypes.LOGIN_USER_SUCCESS, { response });
export const loginFailureAction = (error) =>
  makeActionCreator(UserTypes.LOGIN_USER_FAIL, { error });

// Register
export const registerAction = (params) =>
  makeActionCreator(UserTypes.REGISTER, { params });
export const registerSuccessAction = (response) =>
  makeActionCreator(UserTypes.REGISTER_USER_SUCCESS, { response });
export const registerFailureAction = (error) =>
  makeActionCreator(UserTypes.REGISTER_USER_FAIL, { error });

// Verify
export const verifyAction = (params) =>
  makeActionCreator(UserTypes.VERIFY, { params });
export const verifySuccessAction = (response) =>
  makeActionCreator(UserTypes.VERIFY_USER_SUCCESS, { response });
export const verifyFailureAction = (error) =>
  makeActionCreator(UserTypes.VERIFY_USER_FAIL, { error });

// Logout
export const logout = () => makeActionCreator(UserTypes.LOGOUT);
// User
export const getCurentUser = () =>
  makeActionCreator(UserTypes.GET_CURRENT_USER);


// Get list user
export const getListUserAction = () =>
  makeActionCreator(UserTypes.GET_LIST_USER);
export const getListUserSuccessAction = (data) =>
  makeActionCreator(UserTypes.GET_LIST_USER_SUCCESS, {data});

// Get top contribute and play
export const getTopContributeAction = () =>
  makeActionCreator(UserTypes.GET_TOP_CONTRIBUTE);
export const getTopContributeSuccessAction = (data) =>
  makeActionCreator(UserTypes.GET_TOP_CONTRIBUTE_SUCCESS, {data});