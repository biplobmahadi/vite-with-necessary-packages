export interface ICounterContextValue {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  msg: string;
  setMsg: (value: string) => void;
  reset: () => void;
}
