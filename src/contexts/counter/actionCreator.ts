import { IReducersAction } from "../../interfaces/common/IReducersAction";
import { DECREMENT, INCREMENT, RESET } from "./actions";

const createActions = (dispatch: React.Dispatch<IReducersAction<number>>) => ({
  increment: (value: number) => dispatch({ type: INCREMENT, payload: value }),
  decrement: (value: number) => dispatch({ type: DECREMENT, payload: value }),
  reset: () => dispatch({ type: RESET, payload: 0 }),
});

export default createActions;
