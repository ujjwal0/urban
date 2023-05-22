import { useState } from 'react';
import './App.css';
import Routing from "./Routing"
function App() {

  const [allow,setallow]=useState(false);
  return (
    <div>
      <Routing allow={allow} setallow={setallow} ></Routing>
    </div>
  );
}

export default App;
