import type { Dispatch } from "react";

export type Actions =
  | { type: string; playload?: { operation: string } }
  | { type: string; playload?: { digit: string } }
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
  dispatch: Dispatch<Actions>;
}
export type Action =
  | { type: "operation"; playload: { operation: string } }
  | { type: "add-digit"; playload: { digit: string } }
  | { type: "AC"; playload?: never }
  | { type: "+/-"; playload?: never }
  | { type: "="; playload?: never };
