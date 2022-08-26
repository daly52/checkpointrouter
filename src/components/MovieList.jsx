import React from 'react'
import {Link} from  'react-router-dom'


const MovieList = ({ movies,search }) => {
    return (
      <>

<section className="cards">

<div className="content">
  {movies.filter((e) => {
    return e.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }).map((e) =>

  (
    <Link to={`/mov/${e.imdbID}`} >
    <div className="card">
      
      
      <img src={e.Poster} alt='movoe'></img>
      <h6>{e.Title}</h6>
     
    </div>
    </Link>
   
  )

  )}

</div>


</section>
      </>
    )
}

export default MovieList