import React, { useState } from "react";

function Options(props) {

    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

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

        props.setPassword(generated);
    };
    return (
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
    )
}

export default Options;