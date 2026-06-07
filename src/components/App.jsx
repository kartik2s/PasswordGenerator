import React, { useState } from "react";
import Options from "./Options.jsx";
import Display from "./Display.jsx";

function App() {

    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <h1>Password Generator</h1>

            <Options setPassword = {setPassword}/>
            <Display password = {password}/>

        </div>
    );
}

export default App;
