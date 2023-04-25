import Card from "../UI/Card/Card";
import classes from "./Auth.module.css";
import classnames from "classnames";
import { useRef, useState } from "react";
import signup from "../../Api/signup";
import signIn from "../../Api/signIn";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../Store/authSlice";
const Auth = () => {
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const [haveAccount, setHaveAccount] = useState(true);
  const dispatch = useDispatch();

  const signupHandler = (event) => {
    event.preventDefault();
    signup(emailInputRef.current.value, passwordInputRef.current.value);
  };
  const signInHandler = (event) => {
    event.preventDefault();
    signIn(emailInputRef.current.value, passwordInputRef.current.value);
    dispatch(authSliceActions.login());
  };

  const changeFormHandler = () => {
    setHaveAccount((prevState) => !prevState);
  };
  return (
    <Card additionalClasses={classnames(classes["login-form"])}>
      {!haveAccount && (
        <form onSubmit={signupHandler}>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailInputRef} type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordInputRef} type="password" />
          <div>
            <button>Signup</button>
          </div>
          <p onClick={changeFormHandler}> Have an account ? Login .</p>
        </form>
      )}
      {haveAccount && (
        <form onSubmit={signInHandler}>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailInputRef} type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordInputRef} type="password" />
          <div>
            <button>Login</button>
          </div>
          <p onClick={changeFormHandler}> Don't have an account ? Signup. </p>
        </form>
      )}
    </Card>
  );
};
export default Auth;
