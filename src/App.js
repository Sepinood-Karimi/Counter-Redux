import Header from "./Components/Header/Header";
import Counter from "./Components/Counter/Counter";
import Auth from "./Components/Auth/Auth";
import classes from "./App.module.css";
import classnames from "classnames";

function App() {
  return (
    <>
      <Header />
      <main className={classnames(classes.main)}>
        {/*<Counter />*/}
        <Auth />
      </main>
    </>
  );
}

export default App;
