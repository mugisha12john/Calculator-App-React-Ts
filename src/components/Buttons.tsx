export default function Buttons(props: {
  one: string;
  two: string;
  three: string;
  sign: string;
}) {
  return (
    <>
      <div className="flex">
        <button className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 ">
          {props.one}
        </button>
        <button className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 ">
          {props.two}
        </button>
        <button className="p-8 w-30 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 ">
          {props.three}
        </button>
        <button className="p-8 w-30 bg-orange-500 flex justify-center items-center font-semibold text-4xl border-2 border-gray-400 ">
          {props.sign}
        </button>
      </div>
    </>
  );
}
