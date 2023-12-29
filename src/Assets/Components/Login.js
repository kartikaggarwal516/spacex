/* eslint-disable no-unused-vars */
import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import spacexLogo from '../Images/spacex-logo.svg';
import "../Styles/login.css";

const loginurl = "https://run.mocky.io/v3/689bee42-50f3-4da7-9046-64bde3a0317b";

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      user: "Kartik",
      pwd: "kartik",
      role: "admin",
    },
    {
      user: "Aman",
      pwd: "aman",
      role: "user",
    },
  ]);
  const [errors, setErrors] = useState({
    user: "",
    pwd: "",
    sbt: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const pwd = e.target[1].value;

    let u = 0;

    if (user.length === 0 || pwd.length === 0) {
      setErrors({ ...errors, sbt: "Please fill all the fields" });
      return;
    }

    while (u < users.length) {
      if (users[u].user !== user) {
        u++;
      } else {
        if (users[u].pwd !== pwd) {
          setErrors({ ...errors, pwd: "Wrong Password" });
          break;
        } else {
          localStorage.setItem("user", JSON.stringify(users[u]));
          navigate("/home");
          break;
        }
      }
    }

    if (u === users.length) {
      setErrors({ ...errors, user: "User does not exist" });
    }
  };

  const getUserData = () => {
    // axios.get(loginurl)
    //     .then((response) => {
    //         // handle success
    //         setUsers(response.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="login">
      <div className="logo-container">
        <img
          src={spacexLogo}
          alt="SpaceX logo"
          className="spacex-logo"
        />
      </div>
      <form className="SignIn-form" onSubmit={submitHandler}>
        <center>
          <h3>Sign In</h3>
        </center>
        <div className="SI-form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter Username"></input>
          {errors.user.length > 0 && <div className="errmsg">{errors.user}</div>}
        </div>
        <div className="SI-form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password"></input>
          {errors.pwd.length > 0 && <div className="errmsg">{errors.pwd}</div>}
        </div>

        <div className="SI-form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          {errors.sbt.length > 0 && <div className="errmsg">{errors.sbt}</div>}
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
