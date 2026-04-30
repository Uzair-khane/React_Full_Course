
import { useState } from 'react';
export default function ChangeInput(){
    const [text,setText] = useState("")
return(
    <div>
        <h1>You Typed This : {text}</h1>
   <input type="text"value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
)
}