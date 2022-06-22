export interface IBaseModal {
  children: JSX.Element[];
  isOpen: boolean;
  close(): void;
}
