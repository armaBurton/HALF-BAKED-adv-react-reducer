import Counter from './components/Counter/Counter';
import { GrandmaProvider } from './context/GrandmaProvider';

export default function App() {
  return (
    <GrandmaProvider>
      <Counter />;
    </GrandmaProvider>
  );
}
