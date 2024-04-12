import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Contagem</h1>
      <Button count={count} onClick={handleClick} />
    </div>
  );
}

function Button({ count, onClick }) {
  return (
    <button className="Button" onClick={onClick}>A contagem está em <span className="bold">{count}</span></button>
  )
}
