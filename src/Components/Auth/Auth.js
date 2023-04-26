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
  const { error, loading, showLoginMessage } = useSelector(
    (state) => state.auth.status
  );
  const dispatch = useDispatch();

  const signupHandler = (event) => {
    event.preventDefault();
    dispatch(authSliceActions.loading());
    signup(emailInputRef.current.value, passwordInputRef.current.value).then(
      (responseData) => {
        if (responseData.user !== null) {
          dispatch(authSliceActions.signup());
        } else {
          dispatch(authSliceActions.findError());
        }
      }
    );
  };
  const signInHandler = (event) => {
    event.preventDefault();
    dispatch(authSliceActions.loading());
    signIn(emailInputRef.current.value, passwordInputRef.current.value).then(
      (responseData) => {
        if (responseData.session !== null) {
          dispatch(authSliceActions.login());
        } else {
          dispatch(authSliceActions.findError());
        }
      }
    );
  };

  const changeFormHandler = () => {
    setHaveAccount((prevState) => !prevState);
  };
  return (
    <>
      <Card additionalClasses={classnames(classes["login-form"])}>
        {!haveAccount && (
          <form onSubmit={signupHandler}>
            <label htmlFor="email">Email</label>
            <input id="email" ref={emailInputRef} type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" ref={passwordInputRef} type="password" />
            <div>
              <button>
                {loading ? (
                  <i className="fa fa-spinner" aria-hidden="true"></i>
                ) : (
                  "Signup"
                )}
              </button>
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
              <button>
                {loading ? (
                  <i className="fa fa-spinner" aria-hidden="true"></i>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <p onClick={changeFormHandler}> Don't have an account ? Signup. </p>
          </form>
        )}
        {error && <h4> Something Went Wrong . Try again!</h4>}
        {showLoginMessage && (
          <h3> Please check your email and then try to login</h3>
        )}
      </Card>
    </>
  );
};
export default Auth;
