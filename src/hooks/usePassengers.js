import { useReducer } from "preact/hooks";

const reducer = (passengers, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...passengers, [action.target]: passengers[action.target] + 1 };
    case "DECREMENT":
      if (passengers[action.target] > 0) {
        return {
          ...passengers,
          [action.target]: passengers[action.target] - 1,
        };
      }
      return passengers;
    default:
      return passengers;
  }
};

const initialPassengers = {
  adults: 2,
  children: 0,
  babies: 0,
};

export default function usePassengers() {
  const [currentPassengers, dispatch] = useReducer(reducer, initialPassengers);

  return [currentPassengers, dispatch]
}
