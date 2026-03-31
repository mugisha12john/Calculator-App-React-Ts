import { ACTIONS } from "../App";

export default function Buttons({
  one,
  two,
  three,
  sign,
  merge,
  dispatch,
}: {
  one: string;
  two: string;
  three: string;
  sign: string;
  merge: boolean;
}) {
  return (
    <>
      <div className="flex">
        {merge ? (
          <>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, playload: { digit: one } })
              }
              className="p-8 w-60  flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
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
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {three}
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  playload: { operation: sign },
                })
              }
              className="p-8 w-30 bg-orange-400 flex justify-center items-center font-bold text-4xl border-2 border-gray-400 "
            >
              {sign}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, playload: { digit: one } })
              }
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {one}
            </button>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, playload: { digit: two } })
              }
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {two}
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.ADD_DIGIT,
                  playload: { digit: three },
                })
              }
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {three}
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  playload: { operation: sign },
                })
              }
              className="p-8 w-30 bg-orange-400 flex justify-center items-center font-bold text-4xl border-2 border-gray-400 "
            >
              {sign}
            </button>
          </>
        )}
      </div>
    </>
  );
}
