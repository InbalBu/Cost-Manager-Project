import { useContext, useState } from "react";
import Costs from "../../components/costs/Costs";
import "../reports/reports.css";

export default function Reports() {
  const [costs, setCosts] = useState([]);
  const [sum, setSum] = useState(0);
  const [category, setcategory] = useState("");
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");

  // Sends a request to the server for issuing reports according to filters
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalCosts = parseInt(localStorage.getItem("totalCosts")) || 0;
    if (isNaN(totalCosts)) {
      totalCosts = 0;
    }
  
    // filter expenses based on selected filters
    const filteredExpenses = currentExpenses.filter((expense) => {
      if (category && expense.category !== category) {
        return false;
      }
      if (year && expense.date.split("-")[0] !== year) {
        return false;
      }
      if (month && expense.date.split("-")[1] !== month) {
        return false;
      }
      return true;
    });
  
    const newcost = filteredExpenses.reduce((acc, expense) => acc + expense.cost, 0);
    totalCosts += newcost;
  
    localStorage.setItem("totalCosts", totalCosts.toString());
    console.log(totalCosts);
    setSum(totalCosts);
    setCosts(filteredExpenses);
  };
  
  
  return (
    <div className="report">
      <Costs costs={costs} />
      <div>
        <form className="reportForm" onSubmit={handleSubmit}>
          <select
            type="text"
            onChange={(e) => setcategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Housing">Housing</option>
            <option value="Sport">Sport</option>
            <option value="Education">Education</option>
            <option value="Transportation">Transportation</option>
            <option value="Other">Other</option>
          </select>
          <input type="date.year" placeholder="Year" onChange={(e) => setyear(e.target.value)} />
          <select id="drp1" onChange={(e) => setmonth(e.target.value)}>
            <option value="">All Months</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
          <button className="btnReport" type="submit">
            Get Report
          </button>
        </form>
        <span className="reportTitle">
          Total Costs: {sum}
        </span>
      </div>
    </div>
  );
}