export interface ICounterContextValue {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
}
