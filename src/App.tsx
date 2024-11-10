import { ChangeEvent, useState } from "react";
import Button from "./components/Button";
import Card, { BodyCard } from "./components/Card";
import List from "./components/List";

function App() {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [miList, setMiList] = useState(["Bitcoin", "Ethereum", "Solana"]);

  function handleSelect(element: string) {
    console.log(element);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAnswer(e.target.value);
  const handleClick = () => setIsLoading(!isLoading);
  const addItem = () => answer && setMiList([...miList, answer]);
  const delItem = () => setMiList(miList.slice(0, -1));

  let sentence: string = "Mostrando la CARD";
  const elementos = miList.length !== 0 && (
    <List data={miList} onSelect={handleSelect} />
  );
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
            <Card>
              <BodyCard
                title="Card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <div className="row">
                <h5>Ingresa Un Personaje</h5>
                <input
                  value={answer}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Hulk"
                />
              </div>
              <div className="row mb-2">
                <div className="col-6">
                  <Button
                    text="Agregar"
                    isLoading={isLoading}
                    onClick={() => addItem()}
                  />
                </div>
                <div className="col-6">
                  <Button
                    text="Eliminar"
                    isLoading={isLoading}
                    onClick={() => delItem()}
                  />
                </div>
              </div>
              {elementos}
              <Button
                text="Enviar"
                isLoading={isLoading}
                onClick={handleClick}
              />
            </Card>
          </div>
        </div>
      </>
    );
  }
  return <p>Hola Mundo Feliz</p>;
}

export default App;
