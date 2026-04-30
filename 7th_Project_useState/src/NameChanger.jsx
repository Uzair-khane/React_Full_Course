import { useState } from "react"
export default function NameChanger(){
    // Multiple use State Example 
    const [name,setName] = useState("ALI")
    const [age,setAge] = useState(22)
    return(
        <div>
         <h1>Name : {name}</h1>
         <h1>age : {age}</h1>
         <button onClick={()=>setName("Uzair")}>Change Name</button>
         <button onClick={()=>setAge(age+1)}>Change Age</button>
        </div>
    )
    
}