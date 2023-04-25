import Card from "../UI/Card/Card";
import classes from "./Counter.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { counterSliceActions } from "../../Store/counterSlice";

const Counter = () => {
  const number = useSelector((state) => state.counter.number);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();

  const payloadNumber = 10;

  const incrementHandler = () => {
    dispatch(counterSliceActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterSliceActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterSliceActions.increase(payloadNumber));
  };

  const decreaseHandler = () => {
    dispatch(counterSliceActions.decrease(payloadNumber));
  };

  const toggleNumberHandler = () => {
    dispatch(counterSliceActions.toggle());
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
