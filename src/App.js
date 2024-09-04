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
        <h1>Learning react and redux !</h1> <div>Count: {props.abc}</div>
        <p>{props.countHoiDanIT}</p>
        <button onClick={() => handleIncrease()}>Increase Count</button>
        <button onClick={() => handleDecrease()}>Decrease Count</button>
      </header>
    </div>
  );
}

// map state (redux + store) + props react
const mapStateToProps = (state) => {
  return {
    countHoiDanIT: state.counter123.count,
    abc: state.counter123.name,
  };
};

//event.target.value

//map dispatch to props react
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter1: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

//higher order component
//cấy 2 hàm mapStateToProps mapDispatchToProps vào APP
export default connect(mapStateToProps, mapDispatchToProps)(App);
