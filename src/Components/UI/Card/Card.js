import classes from "./Card.module.css";
import classnames from "classnames";
const Card = ({ children, additionalClasses }) => {
  return (
    <div className={classnames(classes.card, additionalClasses)}>
      {children}
    </div>
  );
};

export default Card;
