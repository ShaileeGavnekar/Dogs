import React,{useState} from 'react';
import './App.css';
import data from './data';
import Dogs from './Components/Dogs';

function App() {
    const [dogs,setDogs]=useState(data);

    function removedog(id){
          const newdog=dogs.filter(dog=>dog.id !==id);
          setDogs(newdog);
    }
    if(dogs.length===0){
      return(
        <div>
          <div className='no-option'>
            <h2 >No Options Left</h2>
            <button className='refresh-button' onClick={()=>setDogs(data)}>Refresh</button>
          </div>
        </div>
      )
    }
  return (
    <div className='App'>
      <Dogs dogs={dogs} removedog={removedog}></Dogs>
    </div>
  );
}

export default App;


