import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [joke, setJoke] = useState({ setup: '', punchline: '' });

  const fetchJoke = async () => {
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      setJoke(data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className='joke-container'>
      <h1>Random Joke Generator 😄😄</h1>
      {isLoading ? <p>Loading...</p> : <div><h3>{joke.setup}</h3><p>{joke.punchline}</p></div>}
      <button onClick={fetchJoke}>Generate New Joke</button>
    </div>
  );
}

export default App;