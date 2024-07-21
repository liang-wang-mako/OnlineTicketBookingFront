import React from 'react'
import * as helper from '../helper'

export default function MovieInfoBanner(props) {
  const movieName = helper.getMovieName(props.movieId)
  const myStyle = {
    backgroundImage: `url(/images/movieimages/${props.movieId}a.jpg)`
  }

  return (
    <div
      class="movie-info-header"
      style={myStyle}
    >
      <div class="container py-5">
        {props.schedule && movieName && <h1 class="text-center text-white">{movieName}</h1>}
      </div>
    </div>
  )
}
