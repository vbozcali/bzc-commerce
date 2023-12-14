import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger
].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer
});

/*
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartTransform from './transforms';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    transforms: [
        cartTransform
    ]
}

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
*/