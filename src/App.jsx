import Form from "./components/Form";
// import Weather from "./components/Weather";
function App() {
  return (
    <>
      <div className="grid place-items-center justify-center h-[100vh] mx-12">
        <div className="bg-blue-700 text-neutral-200 p-3 rounded-xl">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
