import {call, put, takeEvery} from 'redux-saga/effects';
import isofetch from 'isomorphic-fetch';

function* fetchTasks(){
    const tasks = yield call([isofetch, isofetch.get], 'https://practiceapi.devmountain.com/api/tasks')
    yield put({type: 'FETCH_TASKS_SUCCESS', payload: tasks.data})
}
export function* fetchTasksWatcher() {
    yield takeEvery('FETCH_TASKS', fetchTasks);
}