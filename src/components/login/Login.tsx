import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useInput from "../hooks/useInput";
import { useAppDispatch } from "../../store/redux-hooks/hooks";
import { setEmail } from "../../store/worker-slice";
import { useNavigate } from "react-router-dom";
import style from './Login.module.css'

const Login = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const email = useInput((value) => {
    const regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    value.trim();
    const match = value.match(regex);

    return match ? false : true;
  });

  const password = useInput((value) => value.length >= 4);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;

        // Baca gresku zbog nevalidnog tipa
        // dispatch(setEmail(user.email))
        
        navigate('/first-step')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form onSubmit={submitHandler} className={style['login-form']}>
      <input
        type="email"
        placeholder="djolesdev@gmail.com"
        onChange={email.inputOnChange}
        onBlur={email.inputOnBlur}
      />
      <input
        type="password"
        placeholder="testtest"
        onChange={password.inputOnChange}
        onBlur={password.inputOnBlur}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
