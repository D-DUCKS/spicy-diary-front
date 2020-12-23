import { all, fork } from "redux-saga/effects";
import subway from './subway/saga';

export default function* rootSaga() {
    yield all([fork(subway)]);
}