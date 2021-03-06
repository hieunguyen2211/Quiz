import { all } from 'redux-saga/effects';
import userSaga from './user/sagas';
// import trainingSaga from "./training/sagas";
import questionSaga from './question/sagas';
import testSaga from './test/sagas';
import tagSaga from './tag/sagas';
import statisticSaga from './statistic/sagas';
import roomSaga from './room/sagas';
import sessionSaga from './session/sagas';
import userAnswerSaga from './user-answer/sagas';

export default function* root() {
  yield all([
    ...userSaga,
    ...questionSaga,
    ...testSaga,
    ...tagSaga,
    ...roomSaga,
    ...sessionSaga,
    ...userAnswerSaga,
    ...statisticSaga,
  ]);
}
