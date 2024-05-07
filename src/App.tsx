import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <Button onClick={() => setCount(count + 1)}>Increment: {count}</Button>
    </div>
  );
}

export default App;
