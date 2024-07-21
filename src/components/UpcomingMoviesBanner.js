

export default function UpcomingMoviesBanner() {
  const myStyle = {
    backgroundImage: `url("images/banner/UpcomingMovies.jpg")`
  }
  return (
    <div
      class="upcoming-header"
      style={myStyle}
    >
      <div class="container py-5 mb-5">
        <h1 class="text-center text-white">Upcoming Movies</h1>
        <p class="text-center text-white">
          Explore our wide range of exciting new and classic movies.
        </p>
      </div>
    </div>
  )
}
