import { IReducersAction } from "../../interfaces/common/IReducersAction";
import { ICounterContextState } from "../../interfaces/counter";
import { DECREMENT, INCREMENT, RESET } from "./actions";

export default function counterReducer(
  state: ICounterContextState,
  action: IReducersAction<number>
) {
  const { count } = state;
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        count: count + payload,
      };
    case DECREMENT:
      return {
        count: count - payload,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
}
