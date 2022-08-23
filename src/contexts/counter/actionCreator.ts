import { IReducersAction } from "../../interfaces/common/IReducersAction";
import { DECREMENT, INCREMENT, MSG, RESET } from "./actions";

const createActions = (
  dispatch: React.Dispatch<IReducersAction<number | string>>
) => ({
  increment: (value: number) => dispatch({ type: INCREMENT, payload: value }),
  decrement: (value: number) => dispatch({ type: DECREMENT, payload: value }),
  reset: () => dispatch({ type: RESET, payload: 0 }),
  setMsg: (value: string) => dispatch({ type: MSG, payload: value }),
});

export default createActions;
