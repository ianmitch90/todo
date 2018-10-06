import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todosReducer from './reducers/todos';
import errorsReducer from './reducers/errors';
import todoWatcher from './sagas/todosSagas'

//making store its own component to make it easier to read on index

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
    const store = createStore(
        combineReducers({
            todos: todosReducer,
            error: errorsReducer
        })
        , composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(todoWatcher);
    return store;
}