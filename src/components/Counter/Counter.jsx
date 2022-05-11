import { useGrandma } from '../../context/GrandmaProvider';
import styles from './Counter.css';

export default function Counter() {
  const { count, increment, decrement, reset, currentColor } = useGrandma();

  console.log(count);

  return (
    <main className={styles.main}>
      <h1 style={{ color: currentColor }}>{count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
          style={{ backgroundColor: 'rgb(52, 211, 153)' }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: 'rgb(239, 68, 68)' }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: 'rgb(236, 222, 153)' }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
