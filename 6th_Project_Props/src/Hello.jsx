export default function Hello(props){
    return(
        <div>
          <h1>Your Full Name : {props.name}</h1>
          <h1>Your Age : {props.age}</h1>
          <h2>My Hobbies</h2>
          <ol>
           
            {props.hobbies.map((hobby,index)=>(
                <li key={index}>{hobby}</li>
            ))}
          </ol>
          <button onClick={props.addclick}>{props.label}</button>
        </div>
    )
}