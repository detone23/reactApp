import Navbar from './Navbar';
import Home from './Home';
import {useState} from 'react';


function App() {

    const [name,setName] = useState("Button");
  const clickResponse =(value) => {

      setName(value)

  }

  return (
    <div className="App">
      <Navbar />
      <div className="components">
       <Home />
        </div>

    </div>
  );
}

export default App;
