import React from "react";
import {ControlWithButtons} from "../controls";

export const Exercise1 = ()=>{
    return <>
        <ControlWithButtons buttons={[
            {
                text: 'Очистить текст',
                position:'right',
                action: (text, setText)=>{ setText('')}
            },
            {
                text: 'Hello world!',
                position: 'right',
                action: (text, setText)=>{ setText('Hello world!')}
            }
        ]}/>
        <ControlWithButtons buttons={[
            {
                text: 'Alert с текстом',
                position:'right',
                action: (text )=>{alert(text)}
            },
            {
                text: 'Alert с числом',
                position: 'left',
                action: ( text)=>{
                    if(/^\d+$/.test(text)) {
                        alert(text)
                    }
                }
            },
        ]}/>
    </>
}