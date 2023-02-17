import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./singleCost.css";

export default function SingleCost() {
  const location = useLocation();
  const { user } = useContext(Context);
  const [sum, setSum] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const cost = location.state.cost;

  useEffect(() => {
    const getCost = () => {
      const storedData = JSON.parse(localStorage.getItem("expenses"));
      const data = storedData.find(item => item._id === cost._id);
      if (data) {
        setSum(data.sum);
        setDescription(data.description);
        setCategory(data.category);
      }
    };
    getCost();
  }, [cost._id]);

  const handleDelete = () => {
    const storedData = JSON.parse(localStorage.getItem("expenses"));
    const updatedData = storedData.filter((item) => item._id !== cost._id);
    localStorage.setItem("costs", JSON.stringify(updatedData));
    window.location.replace("/");
  };

  const handleUpdate = () => {
    const storedData = JSON.parse(localStorage.getItem("expenses"));
    const updatedData = storedData.map((item) => {
      if (item._id === cost._id) {
        return {
          ...item,
          sum,
          description,
          category,
        };
      }
      return item;
    });
    localStorage.setItem("costs", JSON.stringify(updatedData));
    setUpdateMode(false);
  };

  return (
    <div className="singleCost">
      <div className="singleCostWrapper">
        {updateMode ? (
          <input
            type="number"
            value={sum}
            className="singleCostsumInput"
            autoFocus
            onChange={(e) => setSum(e.target.value)}
          />
        ) : (
          <h1 className="singleCostTitle">
            Sum: {sum}
            {cost.username === user?.username && (
              <div className="singleCostEdit">
                <i
                  className="singleCostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleCostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singleCostInfo">
          <span className="singleCostAuthor">
            Author:
           
              <b> {cost.username}</b>
        
          </span>
        </div>
        {updateMode ? (
          <input
            type="text"
            value={description}
            className="singleCostdescriptionInput"
            autoFocus
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singleCostdescription">Description: {description}</p>
        )}
        <span className="singleCostDate">
          Date: {new Date(cost.date).toLocaleDateString('en-US') }
        </span>
        {updateMode && (
          <button className="singleCostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};
