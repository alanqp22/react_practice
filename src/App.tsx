import Button from "./components/Button";
import Card, { BodyCard } from "./components/Card";
import List from "./components/List";

function App() {
  function handleSelect(element: string) {
    console.log(element);
  }
  let sentence: string = "Mostrando la CARD";
  const miList = ["Bitcoin", "Ethereum", "Solana"];
  if (sentence) {
    return (
      <>
        <h1
          style={{ color: "red", fontFamily: "helvetica", textAlign: "center" }}
        >
          {sentence}
        </h1>
        <div className="row">
          <div className="col-1">
            <Button />
          </div>
          <div className="col-1">
            <Button />
          </div>
          <div className="col-1">
            <Card>
              <BodyCard
                title="Card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <List data={miList} onSelect={handleSelect} />
            </Card>
          </div>
        </div>
      </>
    );
  }
  return <p>Hola Mundo Feliz</p>;
}

export default App;
