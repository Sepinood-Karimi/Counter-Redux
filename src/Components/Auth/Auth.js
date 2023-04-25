import Card from "../UI/Card/Card";
import classes from "./Auth.module.css";
import classnames from "classnames";
const Auth = () => {
  return (
    <Card additionalClasses={classnames(classes["login-form"])}>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        <div>
          <button>Signup</button>
        </div>
        <p> Have an account ? Login .</p>
      </form>
    </Card>
  );
};
export default Auth;
