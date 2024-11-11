import CriptosList from "./CriptosList";
import TrianguloHierro from "./TrianguloHierro";

function App() {
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
    </>
  );
}

export default App;
