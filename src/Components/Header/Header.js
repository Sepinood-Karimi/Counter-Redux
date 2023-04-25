import classes from "./Header.module.css";
import classnames from "classnames";
const Header = () => {
  const logoutHandler = () => {};
  return (
    <div className={classnames(classes.header)}>
      <h1> Redux Counter & Auth </h1>
      <button onClick={logoutHandler}> Logout </button>
    </div>
  );
};
export default Header;
