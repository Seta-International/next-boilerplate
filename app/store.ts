import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducer';
import rootSaga from './saga';

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: devMode,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<RootStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: devMode });
