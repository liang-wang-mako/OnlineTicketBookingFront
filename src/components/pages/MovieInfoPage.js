
import { useParams } from 'react-router-dom'
import MovieInfoBanner from '../MovieInfoBanner'
import MovieInfo from '../MovieInfo'

export default function MovieInfoPage() {
  const params = useParams()
  const { movieid } = params
  return (
    <>
      <MovieInfoBanner movieId={movieid} />
      
      <MovieInfo movieId={movieid} />
         
    </>
  )
}


