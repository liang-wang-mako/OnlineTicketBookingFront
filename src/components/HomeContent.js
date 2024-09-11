
import HomeOverview from './HomeOverview'
import MovieList from "./MovieList"

export default function HomeContent() {
  return (
    <div class="container-xl">
      <HomeOverview />

      {/* Current new release MovieList */}
      <MovieList
        releaseType="New Release"
        isCurrent="true"
      />
      {/* Current classic MovieList */}
      <MovieList
        releaseType="Classic"
        isCurrent="true"
      />
    </div>
  )
}
