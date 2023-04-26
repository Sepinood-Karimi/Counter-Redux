import Header from "./Components/Header/Header";
import Counter from "./Components/Counter/Counter";
import Auth from "./Components/Auth/Auth";
import classes from "./App.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.status.isLoggedIn);
  return (
    <>
      <Header />
      <main className={classnames(classes.main)}>
        {isLoggedIn && <Counter />}
        {!isLoggedIn && <Auth />}
      </main>
    </>
  );
}

export default App;
