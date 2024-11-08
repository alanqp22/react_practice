import { useState } from "react";
type ListProps = {
  data: string[];
  onSelect?: (element: string) => void;
};

function List({ data, onSelect }: ListProps) {
  let [indice, setIndice] = useState(1);
  function changeItem(index: number, element: string) {
    setIndice(index);
    onSelect?.(element);
  }
  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          onClick={() => changeItem(i, item)}
          key={item}
          className={`list-group-item ${indice == i ? "active" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
