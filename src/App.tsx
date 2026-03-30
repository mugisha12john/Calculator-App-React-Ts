import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <section>
          <div className="bg-gray-600 w-[26rem] text-white font-bold text-4xl text-right p-2">
            90
          </div>
          <Buttons/>
        </section>
      </main>
    </>
  );
}

export default App;
