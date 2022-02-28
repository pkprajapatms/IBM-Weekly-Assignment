import { useDispatch } from "react-redux";
import { updateEntry, deleteEntry } from "../Actions/Action";

const Entry = (props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEntry(props.entry.id));
  };
  const handleUpdate = () => {
    dispatch(updateEntry(props.entry.id));
  };

  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      <div className="">{props.entry.item}</div>
      <div className="">{parseFloat(props.entry.weight).toFixed(2)} g</div>
      <div className="">{parseFloat(props.entry.calories).toFixed(2)} kcal</div>
      <div className="">{parseFloat(props.entry.calories / props.entry.weight).toFixed(2)} kcal/g</div>
      <button className="btn btn-outline-secondary" onClick={handleUpdate}>UPDATE</button>
      <button className="btn btn-outline-secondary" onClick={handleDelete}>DELETE</button>
    </div>
  );
};
export default Entry;
