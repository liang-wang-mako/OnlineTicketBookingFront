
import HomeOverview from './HomeOverview'
import MovieList from "./MovieList"

export default function HomeContent() {
  return (
    <div class="container-xl">
      <HomeOverview />
      <MovieList
        releaseType="New Release"
        isCurrent="true"
      />
      <MovieList
        releaseType="Classic"
        isCurrent="true"
      />
    </div>
  )
}
