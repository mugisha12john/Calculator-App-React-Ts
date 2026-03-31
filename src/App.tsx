import { useReducer } from "react";
import Buttons from "./components/Buttons";
import type { Btn } from "./components/Interface";

export const ACTIONS = {
  CLEAR_ALL: "AC",
  POSITIVE_NEGATIVE: "+/-",
  CHOOSE_OPERATION: "operation",
  ADD_DIGIT: "add-digit",
};
function reducer(state, { type, playload }) {
  switch (type) {
    case ACTIONS.CHOOSE_OPERATION:
      return "your sign " + playload.operation;
    case ACTIONS.ADD_DIGIT:
      return { ...state, current: `${state.current || ""}${playload.digit}` };
    case ACTIONS.CLEAR_ALL:
      return 0;
    case ACTIONS.POSITIVE_NEGATIVE:
      return state > 0 ? state : -state;
  }
}

function App() {
  // const [result, setResult] = useState<number[]>([]);
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {});
  const buttons: Btn[] = [
    { one: "AC", two: "+/-", three: "%", sign: "÷" },
    { one: "7", two: "8", three: "9", sign: "*" },
    { one: "4", two: "5", three: "6", sign: "-" },
    { one: "1", two: "2", three: "3", sign: "+" },
    { one: "0", two: "", three: ".", sign: "=", merge: true },
  ];
  const handleClick = (value: string) => {
    console.log("Clicked:", value);
  };

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <section>
          <div className="bg-gray-600 max-w-lg h-20 text-white font-bold text-5xl text-right p-2">
            {previous} {operation} {current}
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
