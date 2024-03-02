
import{useState}from 'react';
function Counter () {
    const [count, setCount]= useState(0)
   
    const handleIncrement = () =>{
        setCount(count +1)
        console.log(count)
        console.log("Increment was clicked")
    }
        const handleDecrement = () =>{
            setCount(count-1)
            console.log(count)
            console.log("Decrement was clicked")
        }
    
    return(
        <div> 
            
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
    }

export default Counter;