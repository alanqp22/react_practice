type buttonProps = {
  text: string;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ text, isLoading, onClick }: buttonProps) {
  return (
    <button
      onClick={() => onClick()}
      className={`btn btn-${isLoading ? "secondary" : "primary"} mt-2 w-100`}
      disabled={isLoading}
    >
      {isLoading ? "Cargando..." : text}
    </button>
  );
}

export default Button;
