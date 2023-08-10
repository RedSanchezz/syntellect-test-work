import '../styles/HitList.css'
import {CountryInfo} from "../../../../api/apiService";

interface HintListProps {
    hints: Array<CountryInfo>
    setText: (text: string)=>void
    isLoading: boolean,
    showHints: boolean,
    setShowHints: (showHints: boolean)=>void
}

const HintList = ({ hints, setText, isLoading, showHints, setShowHints } :HintListProps)=> {

    let containerClasses = showHints ? 'hints-container' : 'hints-container hide'

    return <div className={containerClasses}>
            <div className='hint-list'>
            {isLoading ? 'loading' : hints.map((hint, index)=> {
                return <div className='hint-list__item' key={index} tabIndex={index} onClick={()=>{
                    setText(hint.name)
                    setShowHints(false);
                }}>
                            <div className="hint-list__item-info" >
                                <div className='hint-list__item-name'>{hint.name}</div>
                                <div className='hint-list__item-full-name'>{hint.fullName}</div>
                            </div>
                            <div className='hint-list__item-flag'><img src={hint.flag}/></div>
                    </div>
        })}
            </div>
    </div>
}

export {HintList}