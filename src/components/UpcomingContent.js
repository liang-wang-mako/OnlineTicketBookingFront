
import MovieList from "./MovieList"

export default function UpcomingContent() {
  return (
    <div class="container-xl">
      <MovieList
        releaseType="New Release"
        isCurrent="false"
      />
      <MovieList
        releaseType="Classic"
        isCurrent="false"
      />
    </div>
  )
}
