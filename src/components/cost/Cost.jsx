import "./cost.css";
import { Link } from "react-router-dom";

export default function Cost({ cost }) {
  return (
    <div className="cost">
      <div>
        <span>User: </span>
        {cost.username}
      </div>
      <div>
        <span>Category: </span>
        {cost.category}
      </div>
      <div>
        <span>Description: </span>
        {cost.description}
      </div>
      <div>
        <span>Date: </span>
        {new Date(cost.date).toLocaleDateString('en-US') }
      </div>
      <div>
        <span>Sum: </span>
        {cost.sum}
      </div>
      <hr />
      <div className="btnCost">
      <Link to={{ pathname: `/cost/${cost.costId}`, state: { cost } }} className="link">
  View Action
</Link>
      </div>
    </div>
  );
}
