import "./settings.css";
import { React, useContext, useState } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
import CustomPopUp from "./../popup/CustomPopUp";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [birthday, setbirthday] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);

  // Sends a request to the server to update details
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      const res = await axiosInstance.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="Title">Profile Settings</div>
      <img className="settingsImg" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMS1iYi0wMi1nZWFyXzIuanBn.jpg?s=KMbydLbnZTI57JCeT7W5LQpopqARmbUPFtruQKCcekQ" alt="" />
      <div className="settingsTitle"></div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label>First name</label>
        <input
          type="first_name"
          placeholder={user.first_name}
          onChange={(e) => setfirst_name(e.target.value)}
        />
        <label>Last name</label>
        <input
          type="last_name"
          placeholder={user.last_name}
          onChange={(e) => setlast_name(e.target.value)}
        />
        <label>Birthday</label>
        <input
          type="date"
          placeholder={user.birthday}
          onChange={(e) => setbirthday(e.target.value)}
        />
        <button className="btnUpdate" type="submit">
          Update
        </button>
        {success && (
          <CustomPopUp
            title={"System Notice"}
            body={"Profile Updated Successfuly!"}
            show={success}
            setShow={setSuccess}
          />
        )}
      </form>
    </div>
  );
}
