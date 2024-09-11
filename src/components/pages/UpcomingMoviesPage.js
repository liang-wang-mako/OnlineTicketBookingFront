
import UpcomingMoviesBanner from '../UpcomingMoviesBanner'
import UpcomingContent from '../UpcomingContent'

export default function UpcomingMoviesPage() {
  return (
    <>
      <UpcomingMoviesBanner />

      {/* The UpcomingContent component contains the upcoming new 
      release MovieList and upcoming classic MovieList */}
      <UpcomingContent />
    </>
  )
}


