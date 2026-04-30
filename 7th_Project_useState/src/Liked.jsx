import { useState } from "react"

export default function Liked(){
    const [liked,setLiked]=useState(true)
    return(
        <div>
            <h1>Liked Button Example Click the button</h1>
            <button onClick={()=>setLiked(!liked)}>
             {liked ? "💖💖Liked":"💜💜💛Like"}
            </button>
        </div>
    )
}