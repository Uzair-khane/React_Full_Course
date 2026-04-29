import "./App.css"
function Hello(){
    const isLogin = false
    const status = "loding"
    const isVissible = true
    // switch 
    // const role = "user"
    // const renderData = ()=>{
    //     switch (role) {
    //   case "admin":
    //     return <h1>Admin Dashboard</h1>;
    //   case "user":
    //     return <h1>User Dashboard</h1>;
    //   default:
    //     return <h1>Guest</h1>;
    // }
    // }
    // using if else 
//     const isLogin = false
//     if(isLogin){
//       return <h1>Your are login</h1>
//     }
//     else{
//   return <h1>pleace login</h1>
//     }  
// using ternery 
return(
    // <div>
    //     {isLogin ? (<h1>Your are login</h1>) : (<h1>pleace login</h1>)}
    // </div>
    // Multiple Conditions 
    <div>
  {/* {status === "loding" && (<p>Loading...</p>)}
  {status === "succes" && (<p>Data Load</p>) }
    {status === "Error" && (<p>Error Occure</p>) } */}
    {/* call render fuction for switch */}
    {/* {renderData()} */}
    <h1 className={isVissible ? "visible" : "notvisible"}>Hello </h1>
  </div>
)
}
export default Hello