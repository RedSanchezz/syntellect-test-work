import {makeAutoObservable} from "mobx";

interface IButton {
    text: string
    action: (text: string, setText: (text: string)=> void)=> void
    position: 'left' | 'right'
}

class ControlWithButtonsModel {
    buttons: Array<IButton> = [];
    text: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setButtons= (buttons:Array<IButton>)=>{
        this.buttons = buttons;
    }

    setText = (text: string)=>{
        this.text = text
    }
}
export { ControlWithButtonsModel, type IButton }