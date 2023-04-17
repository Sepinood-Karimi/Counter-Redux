import classes from "./Header.module.css";
import classnames from "classnames";
const Header = () => {
  return (
    <div className={classnames(classes.header)}>
      <h1> Redux Counter & Auth </h1>
      <button> Logout </button>
    </div>
  );
};
export default Header;
