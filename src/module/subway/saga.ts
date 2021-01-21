import SubwayApi from 'src/api/SubwayApi';
import types from './types';
import * as actions from './actions';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchStations(action: any) {
  try {
    const result = yield call(() => {
      return SubwayApi.getSubwayLine(action.lineNo);
    });
    yield put(actions.fetchStationsSuccess(result.data));
  } catch (err) {
    yield put(actions.fetchStationsFailure(err.response.data));
  }
}

export function* watchFetchStations() {
  yield takeLatest(types.FETCH_STATIONS_REQUEST, fetchStations);
}

export default function* subwaySaga() {
  yield all([fork(watchFetchStations)]);
}
