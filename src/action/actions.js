import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: { like: "Buy Milk", name: "Phúc Hoàng" },
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
