import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context); // to check if i have a user logged in
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar navbar-expand-md navbar-dark fixed-top ">
      <div class="container-fluid ">
        <div class="navbar-brand">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse w-full flex items-center justify-between " id="navbarCollapse">
          <ul class="navbar-nav mb-2 mb-md-0 flex items-center">
            <li class="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item " onClick={handleLogout}>
              <Link className="nav-link active" to="/login">
                {user && "Logout"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
