import {observer} from "mobx-react-lite"
import {useEffect, useState} from "react"
import {AutocompleteControlModel} from "../model/AutocompleteControlModel"
import {HintList} from "../view/components/HintList"
import {Input} from "../view/components/Input"

interface AutocompleteControlComponentProps {
    maxHintCount: number
}

const AutocompleteControlComponent = ({ maxHintCount }: AutocompleteControlComponentProps)=> {
    const [{
            text, fetchHints, isLoading,
            hints, setText, setMaxHintCount,
            showHints, setShowHints
        }] = useState(()=> new AutocompleteControlModel())

    useEffect(()=>{
        setMaxHintCount(maxHintCount)
    }, [maxHintCount])

    useEffect(()=>{
        fetchHints()
    }, [text])

    return <div>
        <Input value={text} setText={setText} setShowHints={setShowHints}/>
        <HintList hints={hints} setText={setText}
                  isLoading={isLoading} showHints={showHints}
                  setShowHints={setShowHints}/>
    </div>
}

const AutocompleteControl = observer(AutocompleteControlComponent)
export {AutocompleteControl}