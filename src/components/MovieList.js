
import data from '../data/Movie.json'

export default function MovieList(props) {
  
  //data from the Movie.json file contains 24 movies.
  //Movie ids from 1 to 6 are for current month new releases,
  //movie ids from 7 to 12 for current month classics,
  //movie ids from 13 to 18 for upcoming new releases, and
  //movie ids from 19 to 24 for upcoming classics.
  //const movieList = data.movies.filter((m) => m.id < 7)
  const movieList =
    props.releaseType === 'New Release'
      ? props.isCurrent === 'true'
        ? data.movies.filter((m) => m.id < 7) // return current new releases
        : data.movies.filter((m) => m.id > 12 && m.id < 19) // return upcoming new releases
      : props.isCurrent === 'true'
      ? data.movies.filter((m) => m.id > 6 && m.id < 13) // return current classics
      : data.movies.filter((m) => m.id > 18 && m.id < 25) // return upcoming classics

  return (
    <>
      <div class="row g-4 row-cols-1 mt-3">
        <div class="mt-5">
          <h1 class="process-h1 text-center">{props.releaseType} Movies</h1>
          <p class="text-center">
            {props.releaseType === 'New Release'
              ? 'Check out the hottest movies in New Zealand'
              : "Check out world's best classic movies"}
          </p>
        </div>
      </div>
      <div class="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3 home-feature">
        {movieList.map((m) => {
          return (
            <div
              key={m.id}
              className="feature col"
            >
              <div>
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img
                    src={`./images/movieimages/${m.id.toString()}.jpg`}
                    alt={m.name}
                  />
                </div>

                <div class="py-1 px-4">
                  <h3 class="fs-2 text-body-emphasis">{m.name}</h3>
                  <div class="actions-group">
                    <a
                      target="_blank"
                      href="https://www.imdb.com/video/vi788252185/?ref_=vi_tr_mp_vp_13"
                      class="link-secondary text-decoration-none"
                      rel="noreferrer"
                    >
                      <i class="bi bi-play-circle bi-cicle"></i>
                    </a>
                    <a
                      href={`movies/${m.id.toString()}`}
                      class="btn btn-secondary"
                    >
                      &nbsp;&nbsp; Info &nbsp;&nbsp;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
