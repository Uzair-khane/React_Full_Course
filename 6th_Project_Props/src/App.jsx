import Hello from "./Hello"
function App() {
const hobbies = ["coding","Night walk","exploring"]
function addclick(){
  alert("hello  from props")
}
  return (
    <>
     <Hello name="Uzair Khan" age={22} hobbies={hobbies} label="click me" addclick={addclick}/>
    </>
  )
}

export default App
