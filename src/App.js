import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "./action/actions";
import store from "./redux/store";
function App(props) {
  const handleIncrease = () => {
    props.increaseCounter1();
    // store.dispatch({
    //   type: "test hoi dan it ",
    //   payload: { name: "eric" },
    // });
  };
  const handleDecrease = () => {
    props.decreaseCounter();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learning react and redux !</h1> <div>Count: {props.count}</div>
        <button onClick={() => handleIncrease()}>Increase Count</button>
        <button onClick={() => handleDecrease()}>Decrease Count</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter1: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
