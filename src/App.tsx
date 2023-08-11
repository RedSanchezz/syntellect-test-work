import React from "react";

import "./App.css";
import {AutocompleteControl, ControlWithButtons} from "./controls";

function App() {
    return <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <ControlWithButtons buttons={[
                {
                    text: 'Очистить текст',
                    position: 'right',
                    action: (text, setText) => {
                        setText('')
                    }
                },
                {
                    text: 'Hello world!',
                    position: 'right',
                    action: (text, setText) => {
                        setText('Hello world!')
                    }
                }
            ]}/>
            <ControlWithButtons buttons={[
                {
                    text: 'Alert с текстом',
                    position: 'right',
                    action: (text) => {
                        alert(text)
                    }
                },
                {
                    text: 'Alert с числом',
                    position: 'left',
                    action: (text) => {
                        if (/^\d+$/.test(text)) {
                            alert(text)
                        }
                    }
                },
            ]}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <AutocompleteControl maxHintCount={3}/>
            <AutocompleteControl maxHintCount={10}/>
        </div>
    </div>;
}

export default App;
