import { ChangeEvent, useState } from "react";
import { Button } from "./components";
import Card, { BodyCard } from "./components/Card";
import List from "./components/List";
import { ItemSelectedContext } from "./ItemSelectedContext";

function CriptosList() {
  const [itemSelected, setItemSelected] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [miList, setMiList] = useState(["Bitcoin", "Ethereum", "Solana"]);

  function handleSelect(element: string) {
    console.log(element);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAnswer(e.target.value);
  const handleClick = () => setIsLoading(!isLoading);
  const addItem = () => {
    if (answer) {
      setMiList([...miList, answer]);
    }
    setAnswer("");
  };
  const delItem = (item: number) =>
    setMiList(miList.filter((_, i) => i !== item));

  const elementos = miList.length !== 0 && (
    <List data={miList} onSelect={handleSelect} onSelected={setItemSelected} />
  );
  return (
    <ItemSelectedContext.Provider value={itemSelected}>
      <div className="row">
        <div className="col-1">
          <Card>
            <BodyCard
              title="Principales Criptos"
              text="Criptos con buenos rendimientos que tengan un historico de precios de minimo 2 años."
            />
            <div className="row">
              <h5>Ingresar cripto</h5>
              <input
                value={answer}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="nombre cripto"
              />
            </div>
            <div className="row mb-2">
              <div className="col-6">
                <Button
                  text="Agregar"
                  typeBtn="primary"
                  onClick={() => addItem()}
                />
              </div>
              <div className="col-6">
                <Button
                  typeBtn="danger"
                  text="Eliminar"
                  onClick={() => delItem(itemSelected)}
                />
              </div>
            </div>
            {elementos}
            <Button
              text="Enviar"
              typeBtn="success"
              isLoading={isLoading}
              onClick={handleClick}
            />
          </Card>
        </div>
      </div>
    </ItemSelectedContext.Provider>
  );
}

export default CriptosList;
