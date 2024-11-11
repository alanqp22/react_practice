import styled from "styled-components";

const MyBtn = styled.button`
  background-color: green;
  padding: 10px 10px;
`;
type buttonProps = {
  text: string;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ text, isLoading, onClick }: buttonProps) {
  return (
    <MyBtn
      onClick={() => onClick()}
      className={`btn btn-${isLoading ? "secondary" : "primary"} mt-2 w-100`}
      disabled={isLoading}
    >
      {isLoading ? "Cargando..." : text}
    </MyBtn>
  );
}

export default Button;
