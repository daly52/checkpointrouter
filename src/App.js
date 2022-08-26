
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';

import MovieList from './components/MovieList';
import InfoMovie from './components/InfoMovie';


function App() {

  const [search, setSearch] = useState('');
  console.log(search);

  const [movies, setMovies] = useState([

    {
      Title: "Spider Man",
      Year: "2002",
      imdbID: "tt0145487",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/t06RUxPbp_c",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",

    },
    {
      Title: "Spider Man: No Way Home",
      Year: "2021",
      imdbID: "tt10872600",
      Type: "movie",
      description: "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange’s help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who’ve ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse. ",
      trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider Man",
      Year: "2012",
      imdbID: "tt0948470",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/-tnxzJ0SSOw",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man 2",
      Year: "2004",
      imdbID: "tt0316654",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/1s9Yln0YwCw",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: Homecoming",
      Year: "2017",
      imdbID: "tt2250912",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/rk-dF1lIbIg",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man 3",
      Year: "2007",
      imdbID: "tt0413300",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/e5wUilOeOmg",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: Into the Spider-Verse",
      Year: "2018",
      imdbID: "tt4633694",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider Man 2",
      Year: "2014",
      imdbID: "tt1872181",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/nbp3Ra3Yp74",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: Far from Home",
      Year: "2019",
      imdbID: "tt6320628",
      Type: "movie",
      description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as a seasoned crime-fighting Peter Parker against iconic foes in Marvel's New York",
      trailer: "https://www.youtube.com/embed/h6GdOpjD3Oc",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: The Animated Series",
      Year: "1994–1998",
      imdbID: "tt0112175",
      Type: "series",
      description: "With Spider-Man: No Way Home currently breaking records at the box office, we can’t think of a better time to celebrate the character’s animated adventures. Although Spider-Man has appeared in several animated projects throughout his storied career as a web-slinging superhero, it’s Spider-Man: The Animated Series that is perhaps the most beloved by fans. The series aired on Fox Kids Network from 1994-1998 for a total of five seasons comprised of sixty-five episodes. That’s a lot of web-fluid, tons of quips, and plenty of bad guys left hanging upside down from telephone poles",
      trailer: "https://www.youtube.com/embed/x-haGJaD13I",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmQ1NzBlYmItNmZkZi00OTZkLTg5YTEtNTI5YjczZjk3Yjc1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  const addMovie = (data) => {

    setMovies([
      ...movies,
      {

        "Title": data,
        "Year": "2019",
        "imdbID": "tt2527338",
        "Type": "movie",
        "description": "",
        "trailer": "",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"

      },


    ]);

  };


  const handleSearch = (value) => {



    setSearch(value);
  };



  return (
    
<>
<NavBar handleSearch={handleSearch} addMovie={addMovie} />
<Routes>
  
  <Route path="/" element ={<MovieList movies={movies} search={search} /> } />
  <Route path="/mov/:imdbID" element ={<InfoMovie movies={movies}  /> } />
 </Routes>
</>



   
  );
};

export default App;
