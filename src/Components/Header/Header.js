import classes from "./Header.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../Store/authSlice";
import { counterSliceActions } from "../../Store/counterSlice";
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.status.isLoggedIn);
  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
    dispatch(counterSliceActions.reset());
  };
  return (
    <div className={classnames(classes.header)}>
      <h1> Redux Counter & Auth </h1>
      {isLoggedIn && <button onClick={logoutHandler}> Logout </button>}
    </div>
  );
};
export default Header;
