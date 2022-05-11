import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const initGrandma = [{ type: 'RESET' }];

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const grandmaReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state = action.payload.count;
      return state;
    case 'DECREMENT':
      state = action.payload.count;
      return state;
    case 'RESET':
      state = action.payload.count;
      return state;
    default:
      throw new Error("I don't know what's going on.");
  }
};

const Grandma = createContext();

export const GrandmaProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState(colors.yellow);
  const [state, dispatch] = useReducer(grandmaReducer, initGrandma);

  useEffect(() => {
    if (count === 0) {
      setCurrentColor(colors.yellow);
    }

    if (count > 0) {
      setCurrentColor(colors.green);
    }

    if (count < 0) {
      setCurrentColor(colors.red);
    }
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
    dispatch({ type: 'INCREMENT', payload: { count } });
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    dispatch({ type: 'DECREMENT', payload: { count } });
  };

  const reset = () => {
    setCount(0);
    dispatch({ type: 'RESET', payload: { count } });
  };

  return (
    <Grandma.Provider
      value={{ count, increment, decrement, reset, currentColor }}
    >
      {children}
    </Grandma.Provider>
  );
};

export const useGrandma = () => {
  const grandma = useContext(Grandma);

  if (grandma === undefined)
    throw new Error('useGrandma must be called from within');

  return grandma;
};
