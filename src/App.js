import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
        fetchPupolar();
  } ,[]);

   const fetchPupolar = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f2e349fe9e8ecced437343534e51774f&language=en-US&page=1')
    const movies = await data.json()
    setPopular(movies.results)
  }

  return (
    <div className="App">
          
    </div>
  );
}

export default App;
