import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  let { children } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

interface BodyProps {
  title?: string;
  text?: string;
}
export function BodyCard(props: BodyProps) {
  let { text, title } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
