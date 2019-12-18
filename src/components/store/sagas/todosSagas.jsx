import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/actionTypes";
import IsomorphFetch from "isomorphic-fetch";

// worker sagas that report to the watcher

export function* fetchTodosSaga(action) {
  const fetchTodos = () => {
    return IsomorphFetch(`https://practiceapi.devmountain.com/api/tasks`);
  };
  try {
    const response = yield call(fetchTodos);
    const todos = yield response.json();
    console.log(todos);
    yield put({ type: actions.FETCHING_TODOS_COMPLETE, todos: todos });
  } catch (error) {
    yield put({ type: actions.FETCH_TODO_ERR, message: error.message });
  }
}

export function* addNewTodoSaga(action) {
  const addNewTodo = ({ title }) => {
    const postHeaders = new Headers();
    postHeaders.append("Content-Type", "application/json");
    return IsomorphFetch(`https://practiceapi.devmountain.com/api/tasks`, {
      method: "POST",
      headers: postHeaders,
      body: JSON.stringify({ title: title })
    });
  };
  try {
    const response = yield addNewTodo(action.todo);
    const todos = yield response.json();
    yield put({ type: actions.ADD_TODO_COMPLETE });
    yield put({ type: actions.FETCHING_TODOS_COMPLETE, todos: todos });
  } catch (error) {
    yield put({ type: actions.ADD_TODO_ERR, message: error.message });
  }
}

export function* editTodoSaga(action) {
  const editTodo = (id, updates) => {
    const patchHeaders = new Headers();
    patchHeaders.append("Content-Type", "application/json");
    patchHeaders.append("Access-Control-Allow-Origin", "*");
    return IsomorphFetch(
      `https://practiceapi.devmountain.com/api/tasks/${id}`,
      {
        method: "PATCH",
        headers: patchHeaders,
        body: JSON.stringify(updates)
      }
    );
  };
  try {
    const response = yield editTodo(action.id, action.updates);
    const todos = yield response.json();
    yield put({ type: actions.EDIT_TODO_COMPLETE });
    yield put({ type: actions.FETCHING_TODOS_COMPLETE, todos: todos });
  } catch (error) {
    yield put({ type: actions.EDIT_TODO_ERR, message: error.message });
  }
}

export function* removeTodoSaga(action) {
  const deleteTodo = id => {
    return IsomorphFetch(
      `https://practiceapi.devmountain.com/api/tasks/${id}`,
      {
        method: "DELETE"
      }
    );
  };
  try {
    const response = yield deleteTodo(action.id);
    const todos = yield response.json();
    yield put({ type: actions.REMOVE_TODO_COMPLETE });
    yield put({ type: actions.FETCHING_TODOS_COMPLETE, todos: todos });
  } catch (error) {
    yield put({ type: actions.REMOVE_TODO_ERR, message: error.message });
  }
}

export function* completeTodoSaga(action) {
  const completeTodo = id => {
    return IsomorphFetch(
      `https://practiceapi.devmountain.com/api/tasks/${id}`,
      {
        method: "PUT"
      }
    );
  };
  try {
    const response = yield completeTodo(action.id);
    const todos = yield response.json();
    yield put({ type: actions.COMPLETE_TODO_COMPLETE });
    yield put({ type: actions.FETCHING_TODOS_COMPLETE, todos: todos });
  } catch (error) {
    yield put({ type: actions.COMPLETE_TODO_ERR, message: error.message });
  }
}

//watcher that calls on the workers in params
//wanted to use fork independent watchers but seems it saga already forks based on yields

export default function* todoWatcher() {
  yield takeEvery(actions.FETCHING_TODOS, fetchTodosSaga);
  yield takeEvery(actions.ADD_TODO_START, addNewTodoSaga);
  yield takeEvery(actions.EDIT_TODO_START, editTodoSaga);
  yield takeEvery(actions.REMOVE_TODO_START, removeTodoSaga);
  yield takeEvery(actions.COMPLETE_TODO_START, completeTodoSaga);
}
