import {useEffect} from "react";
import './App.css';

function App() {
   useEffect(()=>{
    fetch("/movies")
    .then((res) => res.json())
    .then((movies)=>console.log(movies))
   }, [])

  return (
    <div className="App">
      <h1>Hello from react</h1>
    </div>
  );
}

export default App;