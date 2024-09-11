
import MovieList from "./MovieList"

export default function UpcomingContent() {
  return (
    <div class="container-xl">
      {/* Upcoming new release MovieList */}
      <MovieList
        releaseType="New Release"
        isCurrent="false"
      />

      {/* Upcoming classic MovieList */}
      <MovieList
        releaseType="Classic"
        isCurrent="false"
      />
    </div>
  )
}
