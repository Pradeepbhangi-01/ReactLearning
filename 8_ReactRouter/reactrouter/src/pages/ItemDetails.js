import { useParams } from "react-router-dom";
import { ITEMS } from "./ItemData";

function ItemDetails() {
  const { itemId } = useParams();
  const item = ITEMS.find((item) => item.id === itemId);

  return (
    <div>
      <h1>ItemDetails Of {item.itemId}</h1>
      <h4>{item.title}</h4>

      <h4>{item.description}</h4>
    </div>
  );
}

export default ItemDetails;
