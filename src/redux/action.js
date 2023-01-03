import { actionTypes } from './constans';

export const setTableData = (data) => ({
  type: actionTypes.SET_TABLE,
  data,
});

export const getRoute = (data) => ({
  type: actionTypes.GET_ROUTE,
  data,
});

export const removeRoute = () => ({
  type: actionTypes.REMOVE_ROUTE,
  data: [],
});
