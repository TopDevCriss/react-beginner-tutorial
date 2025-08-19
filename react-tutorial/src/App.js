import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  return <div>{title}</div>;
}

export default App;
