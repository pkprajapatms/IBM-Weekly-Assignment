import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../Actions/Action";

const AddEntry = () => {
  const [item, setItem] = useState("");
  const [weight, setWeights] = useState(0);
  const [calories, setCalories] = useState(0);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry({ item,weight,calories }));
    setItem("");
    setWeights(0);
    setCalories(0);
  };
  return (
    <div className="border border-info rounded p-4 mt-3">
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Product Name</label>
          <input
            type="text" 
            autoComplete="off"
            id="description"
            className="form-control"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          required/>
        </div>

        <div className="form-group mt-2">
          <label htmlFor="description">Weight of product (in gram)</label>
          <input
            type="text" 
            autoComplete="off"
            id="Weight"
            className="form-control"
            value={weight}
            onChange={(e) => setWeights(e.target.value)}
           />
        </div>

        <div className="form-group mt-2 ">
          <label htmlFor="description">Calories (in kcal)</label>
          <input
            type="text" 
            autoComplete="off"
            id="Amount"
            className="form-control"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            />
        </div>

        <button className="btn btn-primary mt-3">Add Details</button>
      </form>
    </div>
  );
};
export default AddEntry;
