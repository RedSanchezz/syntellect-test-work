import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {TextArea} from "../view/components/TextArea";
import {ButtonsContainer} from "../view/components/ButtonsContainer";
import {ControlWithButtonsModel, IButton} from "../model/ControlWithButtonsModel";

interface ControlWithButtonsProps {
    buttons: Array<IButton>
}

const ControlWithButtonsComponent = ({ buttons: buttonsInProps }: ControlWithButtonsProps)=>{
    const [{ buttons, setButtons , setText, text}] = useState(()=>new ControlWithButtonsModel())

    useEffect(()=>{
        setButtons(buttonsInProps)
    }, [buttonsInProps, setButtons])

    const rightButtons = buttons.filter((button)=> button.position === 'right')
    const leftButtons = buttons.filter((button)=> button.position === 'left')

    return <div className='controls-with-buttons'>
        <ButtonsContainer buttons={leftButtons} setText={setText} text={text}/>
        <TextArea onChange={(text)=>setText(text)} value={text}/>
        <ButtonsContainer buttons={rightButtons} setText={setText} text={text}/>
    </div>
}
const ControlWithButtons = observer(ControlWithButtonsComponent);
export {ControlWithButtons};