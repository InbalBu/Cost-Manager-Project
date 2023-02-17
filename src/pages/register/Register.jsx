import { axiosInstance } from "../../config";
import { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [birthday, setbirthday] = useState("");
  const [error, setError] = useState(false);

  // Sends a request to the server for registration and executes only if all fields are correct
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        first_name,
        last_name,
        username,
        email,
        password,
        birthday,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <img className="signupImg" src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000" alt="" />
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="registerInput"
          placeholder="First Name"
          onChange={(e) => setfirst_name(e.target.value)}
        />
        <input
          type="text"
          className="registerInput"
          placeholder="Last Name"
          onChange={(e) => setlast_name(e.target.value)}
        />
        <input
          type="text"
          className="registerInput"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="registerInput"
          placeholder="Id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="registerInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="Date"
          className="registerInput"
          placeholder="Birthday"
          onChange={(e) => setbirthday(e.target.value)}
        />
        <button className="btnRegister" type="submit">
          Register
        </button>
      </form>
      {console.log(error)}
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
