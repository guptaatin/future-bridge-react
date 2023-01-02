import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = () => {
      fetch('http://localhost:8080/api/demos/getMovies')
      .then(res => res.json())
      .then(data => setMovies(data))
    }
    fetchMovies()
  }, [])
  return (
    <div className="App">
    {movies.map(item => {
    return (
    <div className='card'>
      <div className='container'>
        <div className='info'><h4>Movie Name:&nbsp;&nbsp;</h4><h6>{item.name}</h6></div>
        <div className='info'><h4>Movie Rating:&nbsp;&nbsp;</h4><h6>{item.rating}</h6></div>
        <div className='info'><h4>Movie Released Date:&nbsp;&nbsp;</h4><h6>{item.release}</h6></div>
      </div>
    </div>
  )})}
    </div>
  );
}

export default App;
