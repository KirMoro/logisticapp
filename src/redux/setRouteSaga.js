import { takeEvery, put } from 'redux-saga/effects';
import { actionTypes } from './constans';

function* getRoute(actionData) {
  const data = {
    from: {
      latitude: actionData.data.fromLat,
      longitude: actionData.data.fromLng,
    },
    to: {
      latitude: actionData.data.toLat,
      longitude: actionData.data.toLng,
    },
  };

  yield fetch(`http://router.project-osrm.org/route/v1/driving/${actionData.data.fromLng},${actionData.data.fromLat};${actionData.data.toLng},${actionData.data.toLat}?geometries=geojson&overview=full`)
    // eslint-disable-next-line consistent-return
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((result) => {
      // OSRM возвращает координаты в формате longitude,latitude.
      // Для корректного отображения полилинии меняем коорданиты местами latitude, longitude
      const routeCoordinates = [];
      result.routes[0].geometry.coordinates.map((arr) => routeCoordinates.push(arr.reverse()));

      data.route = routeCoordinates;

      return data;
    });

  yield put({ type: actionTypes.SET_ROUTE, data });
}

function* removeRoute() {
  const data = [];
  yield put({ type: actionTypes.REMOVE_ROUTE, data });
}

function* setRouteSaga() {
  yield takeEvery(actionTypes.GET_ROUTE, getRoute);
  yield takeEvery(actionTypes.DELETE_ROUTE, removeRoute);
}

export default setRouteSaga;
