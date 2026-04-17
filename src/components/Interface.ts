import type { Dispatch } from "react";

export type Action =
  | { type: "operation"; playload: { operation: string } }
  | { type: "add-digit"; playload: { digit: string } }
  | { type: "AC" }
  | { type: "+/-" }
  | { type: "=" };

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

export interface CalculatorData {
  current?: string;
  previous?: string;
  operation?: string;
}

export const ACTIONS = {
  CLEAR_ALL: "AC",
  POSITIVE_NEGATIVE: "+/-",
  CHOOSE_OPERATION: "operation",
  ADD_DIGIT: "add-digit",
  EQUALS: "=",
} as const;