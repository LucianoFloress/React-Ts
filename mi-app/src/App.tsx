import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";

function App() {
  return (
    <div>
    <h1 className="text-center mt-2">Hola mundo</h1>
    <hr/>
    
    <Counter/>
    <hr/>

    <TimerPadre/>
    </div>
  );
}

export default App;