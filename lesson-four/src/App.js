import { useCounter } from "./useCounter.js";

function App() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}

export default App;
