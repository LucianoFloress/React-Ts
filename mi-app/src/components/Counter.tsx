import { useState } from "react"

export const Counter = () => {

  const [counter, setcounter] = useState(0);
  const incrementar = (numero : number = 1)=> {
    setcounter(counter+numero);
  }
  return (

    <div className="m-5">
        <h2>Counter: useState</h2>
        <p>Valor: {counter}</p>
        <button className="btn btn-secondary" onClick={() => incrementar()}>+1</button>
        <button className="btn bg-dark text-white mx-1" onClick={()=>incrementar(2)}>+2</button>
        <button className="btn btn-danger" onClick={()=>setcounter(0)}>-1</button>
    </div>
  )
}

//hola