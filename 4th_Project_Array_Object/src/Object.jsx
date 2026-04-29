// in this component we will learn about object in react 
  // get full name 
    function fullname(user){
        return user.firstName + " " + user.lastName
    }
function ObjectExample(){
    const user = {
        firstName : "Uzair",
        lastName : "Khan",
        age : 22
    }
  
    // array of Object 
    const users = [
        {
        firstName : "Uzair",
        lastName : "Khan",
        age : 22
    },
    {
        firstName : "Ali",
        lastName : "Khan",
        age : 21
    },
    {
        firstName : "Hassan",
        lastName : "Khan",
        age : 25
    }
    ]
    return(
  <div>
    <h1>React Object</h1>
    <p>First Name {user.firstName}</p>
    <p>Last Name {user.lastName}</p>
    <p>Age {user.age}</p>
    <h1>Get Full Name </h1>
    <p>{fullname(user)}</p>
    <h1>Array of Object </h1>
    <ol>
      {users.map((user,index)=>(
        <li key={index}>{user.firstName} {user.lastName}  you are {user.age} old</li>
      ))}
    </ol>
  </div>
    )
}
export default ObjectExample