import { actionTypes } from './constans';

export const routeData = (data = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_ROUTE:
      return action.data;

    case actionTypes.REMOVE_ROUTE:
      return action.data;

    default:
      return data;
  }
};
