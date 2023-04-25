import Card from "../UI/Card/Card";
import classes from "./Counter.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../Store";

const Counter = () => {
  const number = useSelector((state) => state.number);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const payloadNumber = 10;

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(payloadNumber));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(payloadNumber));
  };

  const toggleNumberHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <Card additionalClasses={classes.counter}>
      <h4> Redux Counter</h4>
      {show && <h2> {number} </h2>}
      {show && (
        <div>
          <div>
            <button
              className={classnames(classes["counter-btn"])}
              onClick={incrementHandler}
            >
              Increment
            </button>
            <button
              className={classnames(classes["counter-btn"])}
              onClick={decrementHandler}
            >
              Decrement
            </button>
          </div>
          <div>
            <button
              className={classnames(classes["counter-btn"])}
              onClick={increaseHandler}
            >
              Increase By {payloadNumber}
            </button>
            <button
              className={classnames(classes["counter-btn"])}
              onClick={decreaseHandler}
            >
              Decrease By {payloadNumber}
            </button>
          </div>
        </div>
      )}
      <div>
        <button
          className={classnames(classes["counter-btn"])}
          onClick={toggleNumberHandler}
        >
          Toggle Counter
        </button>
      </div>
    </Card>
  );
};
export default Counter;
