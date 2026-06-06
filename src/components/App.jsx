import React, { useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()_+";
    }

    let generated = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>

      <div className="controls">
        <label>
          Length: {length}
          <input
            type="range"
            min="6"
            max="25"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Symbols
        </label>

        <button onClick={generatePassword}>Generate</button>
      </div>

      {password && (
        <div className="output">
          <p>{password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
