import React from "react";
import { useState, useEffect, useRef } from "react";

function App() {
  const ref = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <input ref={ref} value={text} onChange={(e) => setText(e.target.value)} />
  );
}

export default App;
