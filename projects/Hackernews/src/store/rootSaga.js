import { all } from 'redux-saga/effects'
import { fetchData } from '../state/actions/fetchNews';

export default function* rootSaga() {
  yield all([fetchData()]);
}