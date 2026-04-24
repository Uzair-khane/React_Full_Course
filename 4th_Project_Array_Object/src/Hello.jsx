function Hello(){
    const fruits = ["apple","banana","mango"]
    const filterFruits = fruits.filter((fruit)=>fruit =='apple')
    const filterInculde = fruits.filter((fruit)=>fruit.includes('m'))
    return(
        <div>
            <h1>This is fruits Array</h1>
        <ul>{
            
            fruits.map((fruit,index)=>(
                <li>{index} {fruit}</li>
            ))
            }</ul>
           <h1>filter fruits</h1>
            <p>{filterFruits}</p>
            <h1>flter fruites using include method </h1>
            <p>{filterInculde}</p>
        </div>
    )
}
export default Hello