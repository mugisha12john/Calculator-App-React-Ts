import { ACTIONS } from "../App";
import type { BtnChild } from "./Interface";

export default function Buttons({
  one,
  two,
  three,
  sign,
  merge,
  dispatch,
}: BtnChild) {
  return (
    <>
      <div className="flex">
        {merge ? (
          <>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, playload: { digit: one } })
              }
              className="p-6 w-60  flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {one}
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.ADD_DIGIT,
                  playload: { digit: three },
                })
              }
              className="p-6 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {three}
            </button>
            <button
              onClick={() => {
                return sign === "="
                  ? dispatch({
                      type: ACTIONS.EQUALS,
                      playload: { operation: sign },
                    })
                  : dispatch({
                      type: ACTIONS.ADD_DIGIT,
                      playload: { digit: sign },
                    });
              }}
              className="p-6 w-30 bg-orange-400 flex justify-center items-center font-bold text-4xl border-2 border-gray-400 "
            >
              {sign}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                return one === "AC"
                  ? dispatch({
                      type: ACTIONS.CLEAR_ALL,
                      playload: { operation: one },
                    })
                  : dispatch({
                      type: ACTIONS.ADD_DIGIT,
                      playload: { digit: one },
                    });
              }}
              className="p-6 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {one}
            </button>
            <button
              onClick={() => {
                return two === "+/-"
                  ? dispatch({
                      type: ACTIONS.POSITIVE_NEGATIVE,
                      playload: { operation: two },
                    })
                  : dispatch({
                      type: ACTIONS.ADD_DIGIT,
                      playload: { digit: two },
                    });
              }}
              className="p-6 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {two}
            </button>
            <button
              onClick={() => {
                return three === "%"
                  ? dispatch({
                      type: ACTIONS.CHOOSE_OPERATION,
                      playload: { operation: three },
                    })
                  : dispatch({
                      type: ACTIONS.ADD_DIGIT,
                      playload: { digit: three },
                    });
              }}
              className="p-6 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {three}
            </button>
            <button
              onClick={() => {
                return sign === "="
                  ? dispatch({
                      type: ACTIONS.EQUALS,
                      playload: { operation: sign },
                    })
                  : dispatch({
                      type: ACTIONS.CHOOSE_OPERATION,
                      playload: { operation: sign },
                    });
              }}
              className="p-6 w-30 bg-orange-400 flex justify-center items-center font-bold text-4xl border-2 border-gray-400 "
            >
              {sign}
            </button>
          </>
        )}
      </div>
    </>
  );
}
