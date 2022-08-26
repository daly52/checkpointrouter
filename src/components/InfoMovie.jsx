import React from 'react'
import { useParams } from 'react-router-dom'

const InfoMovie = ({ movies }) => {
  const params = useParams();

  const mov = movies.find((el) => el.imdbID === params.imdbID);
  console.log(mov.Title);
  return (
    <div className="infomivie">

      <img src={mov.Poster} className="img-fluid" alt="Responsive" style={{ height:"500px"}}></img>
      <div className="cardsinfo">

        <h1 >{mov.Title}</h1>
        <h2>{mov.Year}</h2>
        <h3>Categories </h3>
        <h4>{mov.Type}</h4>
        <h3>Description </h3>
        <h4>{mov.description}</h4>
        <h3>Trailer</h3>

<div className="ratio ratio-21x9">
  <iframe src={mov.trailer} title="YouTube video" allowfullscreen></iframe>
  
</div>


    </div>
    </div>
  )
}

export default InfoMovie