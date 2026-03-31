import type { Btn } from "./Interface";
interface ButtonsProps extends Btn {
  onButtonClick: (value: string) => void;
}

export default function Buttons({
  one,
  two,
  three,
  sign,
  merge,
  onButtonClick,
}: ButtonsProps) {
  return (
    <>
      <div className="flex">
        {merge ? (
          <>
            <button
              onClick={() => onButtonClick(one)}
              className="p-8 w-60  flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {one}
            </button>
            <button
              onClick={() => onButtonClick(three)}
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {three}
            </button>
            <button
              onClick={() => onButtonClick(sign)}
              className="p-8 w-30 bg-orange-400 flex justify-center items-center font-bold text-4xl border-2 border-gray-400 "
            >
              {sign}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onButtonClick(one)}
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {one}
            </button>
            <button
              onClick={() => onButtonClick(two)}
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {two}
            </button>
            <button
              onClick={() => onButtonClick(three)}
              className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 "
            >
              {three}
            </button>
            <button
              onClick={() => onButtonClick(sign)}
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
