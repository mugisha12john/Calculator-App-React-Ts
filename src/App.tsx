import { useReducer } from "react";
import Buttons from "./components/Buttons";
import type { Action, ACTIONS, Btn } from "./components/Interface";

export const ACTIONS = {
  CLEAR_ALL: "AC",
  POSITIVE_NEGATIVE: "+/-",
  CHOOSE_OPERATION: "operation",
  ADD_DIGIT: "add-digit",
  EQUALS: "=",
};
function reducer(
  state,
  {
    type,
    playload,
  }: { type: string; playload: { operation?: string; digit?: string } },
) {
  switch (type) {
    case ACTIONS.CHOOSE_OPERATION:
      if (state.current == null && state.previous == null) {
        return state;
      }
      if (state.current == null) {
        return {
          ...state,
          operation: playload.operation,
        };
      }
      if (state.previous == null) {
        return {
          ...state,
          operation: playload.operation,
          previous: state.current,
          current: null,
        };
      }
      return {
        ...state,
        previous: evaluate(state),
        operation: playload.operation,
        current: null,
      };
    case ACTIONS.ADD_DIGIT:
      if (playload.digit === "0" && state.current === "0") return state;
      if (playload.digit === "." && state.current == undefined)
        return { ...state, current: "0." };
      if (playload.digit === "." && state.current.includes(".")) return state;
      return { ...state, current: `${state.current || ""}${playload.digit}` };
    case ACTIONS.CLEAR_ALL:
      return {};

    case ACTIONS.POSITIVE_NEGATIVE:
      return { ...state, current: `${parseFloat(state.current) * -1}` };
    case ACTIONS.EQUALS:
      if (state.current == null || state.previous == null) return state;
      return {
        ...state,
        current: evaluate(state),
        previous: null,
        operation: null,
      };
  }
}
function evaluate({
  current,
  previous,
  operation,
}: {
  current: string;
  previous: string;
  operation: string;
}) {
  console.log("operation received:", operation, typeof operation);
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return current ?? previous ?? "";
  switch (operation) {
    case "+":
      return `${prev + curr}`;
    case "-":
      return `${prev - curr}`;
    case "*":
      return `${prev * curr}`;
    case "÷":
      return `${prev / curr}`;
    case "%":
      return `${prev % curr}`;
    case "=":
      return `${prev}`;
    default:
      console.log("evaluate got operation:", operation);
      return "Invalid operation";
  }
}

function App() {
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {});
  const buttons: Btn[] = [
    { one: "AC", two: "+/-", three: "%", sign: "÷" },
    { one: "7", two: "8", three: "9", sign: "*" },
    { one: "4", two: "5", three: "6", sign: "-" },
    { one: "1", two: "2", three: "3", sign: "+" },
    { one: "0", two: "", three: ".", sign: "=", merge: true },
  ];

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <section>
          <div className="bg-gray-600 max-w-lg h-28 text-white text-2xl font-bold  text-right p-2">
            <div className="text-gray-400">{previous}</div>
            <div className="text-gray-300">{operation}</div>
            <div>{current}</div>
          </div>
          {buttons.map((btn, index) => {
            return (
              <Buttons
                key={index}
                one={btn.one}
                two={btn.two}
                three={btn.three}
                sign={btn.sign}
                merge={btn.merge}
                dispatch={dispatch}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
