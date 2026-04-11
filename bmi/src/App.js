import './App.css';
import { useState } from 'react';

function App() {
  // making state for our application
  const[weight,setWeight] = useState('');
  const[height,setHeight] = useState('');
  const[bmi,setBmi] = useState('');
  const[message,setMessage] = useState('');

  // logic
  let calBMI = (e) => {
    e.preventDefault();
    if(Number(weight) === 0 || Number(height) === 0){
      alert('Please enter a valid weight and height');
    }
    else{
      let heightInMeters = height / 100;

      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      if(bmi<25){
        setMessage('You are under weight');
      }
      else if(bmi>25 && bmi <30){
        setMessage('You are healthy')
      }
      else{
        setMessage('You are overweight');
      }
    }
  }


// reload
let reload = () => {
  window.location.reload()
}

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBMI}>
          <div>
            <label>Weight (Kg)</label>
            <input type='text' placeholder='Enter Your Weight' value={weight} onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input type='text' placeholder='Enter Your Height' value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' onClick={calBMI} type='submit' >Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
