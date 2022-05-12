import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const initGrandma = { color: colors.yellow, count: 0 };

const Grandma = createContext();

export const GrandmaProvider = ({ children }) => {
  function handleColor(count) {
    if (count > 0) return colors.green;
    if (count < 0) return colors.red;
    if (count === 0) return colors.yellow;
  }

  const grandmaReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
          color: handleColor(state.count + 1),
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1,
          color: handleColor(state.count - 1),
        };
      case 'RESET':
        return initGrandma;
      default:
        throw new Error("I don't know what's going on.");
    }
  };

  const [state, dispatch] = useReducer(grandmaReducer, initGrandma);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <Grandma.Provider value={{ state, increment, decrement, reset }}>
      {children}
    </Grandma.Provider>
  );
};

export const useGrandma = () => {
  const grandma = useContext(Grandma);

  if (grandma === undefined)
    throw new Error('useGrandma must be called from within a Grandma Provider');

  return grandma;
};
