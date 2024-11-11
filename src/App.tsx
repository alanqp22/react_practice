import CriptosList from "./CriptosList";
import TrianguloHierro from "./TrianguloHierro";

type Props = {};

function App({}: Props) {
  return (
    <>
      <h1
        style={{ color: "red", fontFamily: "helvetica", textAlign: "center" }}
      >
        Utilidades para el trading
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
