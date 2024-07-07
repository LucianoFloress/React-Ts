import { useState } from "react";
import { Timer } from "./Timer"

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <div className="m-5">
      <h2>useEffect</h2>
        <span>Milisegundos: {milisegundos}</span>
        <button className="btn btn-primary" onClick={()=> setMilisegundos(1000)}>1000</button>
        <button className="btn btn-success" onClick={()=> setMilisegundos(2000)}>2000</button>

        <Timer/>
    </div>
  )
}