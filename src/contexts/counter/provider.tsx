import { createContext, useReducer } from "react";
import IChildrenComponent from "../../interfaces/common/IChildrenComponent";
import { ICounterContextValue } from "../../interfaces/counter";
import createActions from "./actionCreator";
import initialState from "./initialState";
import counterReducer from "./reducer";

export const CounterContext = createContext<ICounterContextValue | undefined>(
  undefined
);

const CounterContextProvider = ({ children }: IChildrenComponent) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { count, msg } = state;
  const { ...actions } = createActions(dispatch);

  return (
    <CounterContext.Provider value={{ count, msg, ...actions }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
