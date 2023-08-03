import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import SignupSVG from "../assets/signup.svg";

import "./Welcome.css";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInfo.email !== registerInfo.confirmEmail) {
      alert("Please check that email are the same");
      return;
    } else if (registerInfo.password !== registerInfo.confirmPassword) {
      alert("Please check that password are the same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInfo.email,
      registerInfo.password
    )
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="welcome">
      <img src={SignupSVG} className="todo-svg" />
      <h1>To-Do List</h1>
      <div className="login-register-container">
        {isRegistering ? (
          <>
            <input
              type="email"
              placeholder="Set your E-mail"
              onChange={(e) =>
                setRegisterInfo({
                  ...registerInfo,
                  email: e.target.value,
                })
              }
              value={registerInfo.email}
              required
            />
            <input
              type="email"
              placeholder="Confirm your E-mail"
              onChange={(e) =>
                setRegisterInfo({
                  ...registerInfo,
                  confirmEmail: e.target.value,
                })
              }
              value={registerInfo.confirmEmail}
              required
            />
            <input
              type="password"
              placeholder="Set your Password (6-Characters)"
              onChange={(e) =>
                setRegisterInfo({
                  ...registerInfo,
                  password: e.target.value,
                })
              }
              value={registerInfo.password}
              required
            />
            <input
              type="password"
              placeholder="Confirm your Password (6-Characters)"
              onChange={(e) =>
                setRegisterInfo({
                  ...registerInfo,
                  confirmPassword: e.target.value,
                })
              }
              value={registerInfo.confirmPassword}
              required
            />
            <button
              className="sign-in-register-button"
              onClick={handleRegister}
            >
              Register
            </button>
            <button
              className="create-account-button"
              onClick={() => setIsRegistering(false)}
            >
              Go Back
            </button>
          </>
        ) : (
          <>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your E-mail"
              required
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password (6-Characters)"
              required
            />
            <button className="sign-in-register-button" onClick={handleSignIn}>
              Sign In
            </button>
            <button
              className="create-account-button"
              onClick={() => setIsRegistering(true)}
            >
              Create an Account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Welcome;
