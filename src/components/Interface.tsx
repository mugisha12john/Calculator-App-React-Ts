import type { Dispatch } from "react";

export type Action =
  | { type: string; playload: { operation: string } }
  | { type: string; playload: { digit: string } }
  | { type: string; playload?: { operation: string } }
  | { type: string; playload?: { operation: string } };

export interface Btn {
  one: string;
  two: string;
  three: string;
  sign: string;
  merge?: boolean;
}
export interface BtnChild extends Btn {
  dispatch: Dispatch<Action>;
}
export interface ACTIONS {
  CLEAR_ALL: string;
  POSITIVE_NEGATIVE: string;
  CHOOSE_OPERATION: string;
  ADD_DIGIT: string;
}
