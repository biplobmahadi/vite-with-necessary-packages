import { IReducersAction } from "../../interfaces/common/IReducersAction";
import { ICounterContextState } from "../../interfaces/counter";
import { DECREMENT, INCREMENT, MSG, RESET } from "./actions";

export default function counterReducer(
  state: ICounterContextState,
  action: IReducersAction<number | string>
): ICounterContextState {
  const { count } = state;
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: count + (payload as number),
      };
    case DECREMENT:
      return {
        ...state,
        count: count - (payload as number),
      };
    case RESET:
      return {
        count: 0,
        msg: "",
      };

    case MSG:
      return {
        ...state,
        msg: payload as string,
      };
    default:
      return state;
  }
}
