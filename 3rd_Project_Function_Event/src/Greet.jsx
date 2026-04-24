function Greet(){
// simple funtion 
function helloUser(){
    return "heloo user"

}
const getName = (name)=>{
 return "welcome"+" "+name
} 
function showUser(){
alert(`welcome Uzair kahn`)
console.log("hiiii")
console.error("errorro");

}
function handleInput(event){
    console.log(event.target.value)
    console.log("hi")
}
    return(
         <>
      <h1>Hello this is Greet Component</h1>
      <p>{helloUser()}</p>
      <h1>{getName("khan")}</h1>
      <button onClick={showUser}>Show</button>
      <input type="text" onChange={handleInput} name="" id="" />
    </>
    )
}
export default Greet