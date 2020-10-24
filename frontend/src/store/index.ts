import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// import reducer
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default createStore(rootReducer, {}, enhancer);
sagaMiddleware.run(rootSaga);
