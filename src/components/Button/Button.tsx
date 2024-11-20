import styled from "styled-components";

const MyBtn = styled.button`
  padding: 10px 10px;
`;
type buttonProps = {
  text: string;
  typeBtn: string;
  isLoading?: boolean;
  onClick: () => void;
};

export const Button = ({ text, isLoading, onClick, typeBtn }: buttonProps) => {
  return (
    <MyBtn
      onClick={onClick}
      className={`btn btn-${isLoading ? "secondary" : typeBtn} mt-2 w-100`}
      disabled={isLoading}
    >
      {isLoading ? "Cargando..." : text}
    </MyBtn>
  );
};
