import { actionTypes } from './constans';

export const getRoute = (data) => ({
  type: actionTypes.GET_ROUTE,
  data,
});

export const removeRoute = () => ({
  type: actionTypes.DELETE_ROUTE,
});
