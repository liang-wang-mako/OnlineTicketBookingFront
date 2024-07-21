import * as helper from '../helper'
import MovieSchedule from './MovieSchedule'

export default function MovieInfo(props) {
  const movie = helper.getMovie(props.movieId)
  return (
    <div class="movie-info-bk py-5">
      <div class="container-xl movie-info-container my-5 movie-info-inner">
        <div class="row g-4 row-cols-1">
          <div class="mt-1">
            <h1 class="display-6 text-light mt-2 mb-1 fw-semibold">
              {movie.name}
            </h1>
            <p class="text-light mt-4">{movie.description}</p>
            <p class="text-light mb-4">
              Director(s): <span class="text-primary">{movie.director}</span>
            </p>
            <p class="text-light mb-4">
              Star(s): <span class="text-primary">{movie.star}</span>
            </p>
            <p class="text-light mt-3">
              {movie.length} &nbsp; {movie.rate} &nbsp; ${movie.price}
            </p>
          </div>
        </div>
        <MovieSchedule movieId={props.movieId} />
      </div>
    </div>
  )
}
