import { axiosInstance } from "../../config";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import CustomPopUp from "./../popup/CustomPopUp";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [show, setshow] = useState(false);

  // Sends a request to the server to connect and connects only if we have an existing user
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setshow(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <img className="signupImg" src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000" alt="" />
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your Username"
          ref={userRef}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your Password"
          ref={passwordRef}
        />
        <button className="btnLogin" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {show && (
        <CustomPopUp
          title={"System Notice"}
          body={"Wrong Username or Password!"}
          show={show}
          setShow={setshow}
        />
      )}
    </div>
  );
}
