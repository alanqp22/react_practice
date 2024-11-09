import { useState } from "react";

type buttonProps = {
  text: string;
};

function Button({ text }: buttonProps) {
  function onClick() {
    setLoading(!loading);
    console.log("Imprimiendo");
  }
  const [loading, setLoading] = useState(false);

  let classBtn = "primary";
  let content = text;
  if (loading) {
    classBtn = "secondary";
    content = "Cargando...";
  }
  return (
    <button
      onClick={() => onClick()}
      className={`btn btn-${classBtn} mt-2`}
      disabled={loading}
    >
      {content}
    </button>
  );
}

export default Button;
