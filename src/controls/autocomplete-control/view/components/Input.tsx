import '../styles/Input.css';

interface InputProps {
    value: string,
    setText: (text: string) => void,
    setShowHints: (showHint: boolean) => void,
}

export const Input = ({value, setText, setShowHints}: InputProps) => {

    return <input className='autocomplete-input' value={value}
                  onChange={(e) => {setText(e.target.value)}}
                  onFocus={(e)=>setShowHints(true)}
                  onBlur={(e) => {
                      if(!e.currentTarget.parentElement?.contains(e.relatedTarget)) setShowHints(false)
                  }}
    />
}