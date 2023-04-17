import classes from "./Card.module.css";
import classnames from "classnames";
const Card = ({ children }) => {
  return <div className={classnames(classes.card)}>{children}</div>;
};

export default Card;
