import { ChangeEvent, useState } from "react";
import Card, { BodyCard } from "./components/Card";
import Button from "./components/Button";

type Props = {};

function TrianguloHierro({}: Props) {
  const [capital, setCapital] = useState("");
  const [cantidadMax, setCantidadMax] = useState("");
  const [pini, setPini] = useState("");
  const [pfini, setPfini] = useState("");

  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCapital(e.target.value);
  const handlePiniChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPini(e.target.value);
  const handlePfiniChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPfini(e.target.value);
  const handleClickCalculo = () => {
    const maximoRiesgo = parseFloat(capital) * 0.01;

    setCantidadMax(`${maximoRiesgo / (parseFloat(pini) - parseFloat(pfini))}`);
  };
  return (
    <>
      <Card>
        <BodyCard title="Triangulo de hierro" />
        <div className="row">
          <div className="col-12 mb-2">
            <label htmlFor="">Capital</label>
            <input
              type="number"
              className="form-control"
              placeholder="Capital disponible($)"
              value={capital}
              onChange={handleCapitalChange}
            />
          </div>
          <div className="col-12 mb-2">
            <label htmlFor="">Precio de entrada</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio inicial($)"
              value={pini}
              onChange={handlePiniChange}
            />
          </div>
          <div className="col-12 mb-2">
            <label htmlFor="">Precio de salida (Stop Loss)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio final($)"
              value={pfini}
              onChange={handlePfiniChange}
            />
          </div>
        </div>

        <Button
          onClick={handleClickCalculo}
          text="Calcular"
          typeBtn="primary"
        />
        <label className="mt-4">Cantidad límite de operación</label>
        <input
          value={cantidadMax}
          type="text"
          className="form-control"
          placeholder="Resultado"
          readOnly
        />
      </Card>
    </>
  );
}

export default TrianguloHierro;
