import Buttons from "./components/Buttons";
import type { Btn } from "./components/Interface";
function App() {
  const buttons: Btn[] = [
    { one: "AC", two: "+/-", three: "%", sign: "/" },
    { one: "7", two: "8", three: "9", sign: "*" },
    { one: "4", two: "5", three: "6", sign: "-" },
    { one: "1", two: "2", three: "3", sign: "+" },
    { one: "0", two: "", three: ".", sign: "=", merge: true },
  ];

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <section>
          <div className="bg-gray-600 max-w-lg h-20 text-white font-bold text-5xl text-right p-2">
            90
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
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
