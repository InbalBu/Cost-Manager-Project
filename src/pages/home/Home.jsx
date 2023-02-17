import { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./home.css";
import { Context } from "../../context/Context";

export default function Home() {

  // Allows permission only if we have an existing user

  return (
    <div>
      <Header />
      <div className="home">
        <Link className="btn" to="/addcost">
          Add New Cost
        </Link>
        <Link className="btn" to="/reports">
          My Reports
        </Link>
      </div>
    </div>
  );
}
