import Button from "./components/Button";

function App() {
  let sentence: string = "Mundo Cruel";
  if (sentence) {
    return (
      <>
        <h1>Hola {sentence}</h1>
        <div className="row">
          <div className="col-2">
            <Button />
          </div>
          <div className="col-2">
            <Button />
          </div>
        </div>
      </>
    );
  }
  return <p>Hola Mundo Feliz</p>;
}

export default App;
