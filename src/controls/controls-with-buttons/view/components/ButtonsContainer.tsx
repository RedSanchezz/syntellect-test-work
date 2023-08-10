import {IButton} from "../../model/ControlWithButtonsModel";

interface ButtonsContainerProps {
    buttons: Array<IButton>,
    setText: (text: string)=>void
    text: string
}

export const ButtonsContainer = ({buttons, setText, text}: ButtonsContainerProps)=>{
    return <div className='buttons-container'>
        {buttons.map((button)=>
            <button className='buttons'
                    onClick={()=>{button.action(text, setText)}}>
                {button.text}
            </button>)}
    </div>
}