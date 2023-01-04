import './App.css';
import {useEffect, useState} from 'react';
import Movie from './Movie';
import Filter from './filter';
import {motion} from 'framer-motion';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
        fetchPupolar();
  } ,[]);

   const fetchPupolar = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f2e349fe9e8ecced437343534e51774f&language=en-US&page=1')
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <div className="App">
         <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
          <div className="popular-movies">
            {filtered.map(movie => {
              return <Movie key={movie.id} movie={movie}/>
            })}
          </div>
    </div>
  );
}

export default App;
