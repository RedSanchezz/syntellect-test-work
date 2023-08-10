import React from "react";
import {AutocompleteControl} from "../controls";

export const Exercise2 = ()=>{
    return <div style={{display: 'flex', flexDirection: 'row'}}>
        <AutocompleteControl maxHintCount={3}/>
        <AutocompleteControl maxHintCount={10}/>
    </div>
}