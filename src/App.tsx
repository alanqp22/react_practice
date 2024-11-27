import Card, { BodyCard } from "./components/Card";
import Home from "./components/Home";
import { Table } from "./components/Table";
import CriptosList from "./CriptosList";
import { Person } from "./models/Person";
import TrianguloHierro from "./TrianguloHierro";
function App() {
  const persona = new Person("alan", "quispe", 29, 1234, false);
  return (
    <>
      <h1
        style={{ color: "red", fontFamily: "helvetica", textAlign: "center" }}
      >
        Caja de Herramientas
      </h1>
      <div className="row">
        <div className="col-6">
          <CriptosList />
        </div>
        <div className="col-6">
          <TrianguloHierro />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Card>
            <BodyCard text="Convex backend" title="Book Collections" />
            <Home />
          </Card>
        </div>
        <div className="col-6">
          <Table person={persona} />
        </div>
      </div>
    </>
  );
}

export default App;
