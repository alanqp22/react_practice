import { ChangeEvent, useId, useState } from "react";
import Card, { BodyCard } from "./components/Card";
import Button from "./components/Button";

function TrianguloHierro() {
  const [capital, setCapital] = useState("");
  const [cantidadMax, setCantidadMax] = useState("");
  const [pini, setPini] = useState("");
  const [pfini, setPfini] = useState("");
  const [riesgo, setRiesgo] = useState("0.01");
  const riesgoSelectedId = useId();

  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCapital(e.target.value);
  const handlePiniChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPini(e.target.value);
  const handlePfiniChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPfini(e.target.value);
  const handleClickCalculo = () => {
    const maximoRiesgo = parseFloat(capital) * parseFloat(riesgo);

    setCantidadMax(`${maximoRiesgo / (parseFloat(pini) - parseFloat(pfini))}`);
  };
  return (
    <>
      <Card>
        <BodyCard title="Triangulo de hierro" />
        <div className="row">
          <div className="col-12 mb-2">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Capital($)</label>
                <input
                  type="number"
                  className="form-control"
                  value={capital}
                  onChange={handleCapitalChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor={riesgoSelectedId}>Nivel de Riesgo</label>
                <select
                  value={riesgo}
                  onChange={(e) => setRiesgo(e.target.value)}
                  name=""
                  id={riesgoSelectedId}
                  className="form-select"
                >
                  <option value="0.01">1% - bajo</option>
                  <option value="0.02">2% - moderado</option>
                  <option value="0.03">3% - alto</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 mb-2">
            <label htmlFor="">Riesgo por operación($) </label>
            <input
              value={parseFloat(riesgo) * parseFloat(capital)}
              type="number"
              readOnly
              className="form-control"
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
        <label className="mt-4">Máximas unidades</label>
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
