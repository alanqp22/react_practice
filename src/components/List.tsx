import { useContext, Dispatch, SetStateAction } from "react";
import { ItemSelectedContext } from "../App";

type ListProps = {
  data: string[];
  onSelect?: (element: string) => void;
  onSelected: Dispatch<SetStateAction<number>>;
};

function List({ data, onSelect, onSelected }: ListProps) {
  const itemSelected = useContext(ItemSelectedContext);
  function changeItem(index: number, element: string) {
    onSelect?.(element);
    onSelected(index);
  }
  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          onClick={() => changeItem(i, item)}
          key={i}
          className={`list-group-item ${itemSelected == i ? "active" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
