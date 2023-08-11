import "../styles/control-with-buttons.css"

interface TextAreaProps {
    onChange: (text: string)=>void
    value: string
}

export const TextArea = ({onChange, value}: TextAreaProps)=>{
    return <textarea className='controls-with-buttons__text-area'
                     value={value}
                     onChange={(e)=>{onChange(e.target.value)}}/>
}