import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { SagaMiddleware, Task } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { Store, AnyAction } from "redux";
import rootReducer from "./reducer";
import rootSaga from "./saga";

export interface SagaStore extends Store<any, AnyAction> {
  sagaTask: Task;
}

const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (_context: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
