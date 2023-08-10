import React, {useState} from "react";
import {Exercise1} from "./components/Exercise1";
import {Exercise2} from "./components/Exercise2";
import "./App.css";

function App() {
    const [exerciseNumber, setExerciseNumber] = useState<1 | 2>(2);

    return <div>
        <div className="tabs">
            <button className="tabs-button" onClick={()=> {setExerciseNumber(1)}}>Exercise1</button>
            <button className="tabs-button" onClick={()=> {setExerciseNumber(2)}}>Exercise2</button>
        </div>
        <div>
            {exerciseNumber === 1 ? <Exercise1/> : <Exercise2/>}
        </div>
    </div>;
}

export default App;
