import React, { useState, useNavigate, useEffect } from "react";
import "../pages/SignIn.css";
import {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase/firebaseInit";

const FormGroup = () => {
  const [register, setRegister] = useState(false);

  function click() {
    setRegister(true);
  }
  function offClick() {
    setRegister(false);
  }

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="formgroup__container">
      {!register ? (
        <h1 className="">Sign in</h1>
      ) : (
        <h1 className="">Register</h1>
      )}
      <p className="sign_to_ur_acc">
        {!register ? (
          <strong>Sign in to your account</strong>
        ) : (
          <strong>Register New Account</strong>
        )}
      </p>

      <div className="signin__with__buttons">
        <button
          className="siginin__google btn__primary"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        <button className="siginin__apple btn__primary">
          Sign in with Apple
        </button>
      </div>

      <div className="form__wrapper">
        <form action="#">
          {(register) ?<label className="font-normal text-[16px]" htmlFor="email">
            Name
          </label>: <></>}
          {register?<input
            type="name"
            className="input__bar"
            autoComplete="true"
            placeholder="Name"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
          />:<></>}
          <label className="font-normal text-[16px]" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="input__bar"
            autoComplete="false"
            placeholder="Email id"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="font-normal text-[16px]" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="input__bar"
            autoComplete="false"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a
            href="http://"
            target="_blank"
            className="forgot__pass"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>

          {!register ? (
            <button
              className="signin__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Sign In
            </button>
          ) : (
            <button
              className="signin__btn"
              onClick={() => registerWithEmailAndPassword(name , email, password)}
            >
              Sign Up
            </button>
          )}
        </form>
      </div>

      {!register ? (
        <p className="form__footer">
          Don't have an account? <a onClick={click} className=" cursor-pointer">Register here</a>
        </p>
      ) : (
        <p className="form__footer">
          Already have an account? <a onClick={offClick} className=" cursor-pointer">SignIn Here</a>
        </p>
      )}
    </div>
  );
};

export default FormGroup;
