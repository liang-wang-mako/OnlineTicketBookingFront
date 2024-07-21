
import { useParams } from 'react-router-dom'
import MovieInfoBanner from "../MovieInfoBanner"
import BookingForm from "../BookingForm"

export default function BookingPage() {
  const params = useParams()
  const { movieid } = params
  return (
    <>
      <MovieInfoBanner movieId={movieid} />
      <BookingForm movieId={movieid} />
    </>
  )
}
