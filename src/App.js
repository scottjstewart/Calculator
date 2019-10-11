import React, { useState } from "react";
import Result from "./result";
import Keypad from "./keypad";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  function calculate() {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  }

  function reset() {
    setResult("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function onClick(button) {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="calculator-body">
          <h1>IEL Calculator</h1>
          <Result result={result} />
          <Keypad onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
