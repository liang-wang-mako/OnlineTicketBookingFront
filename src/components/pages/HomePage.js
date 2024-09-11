
import Slider from '../Slider'
import HomeContent from '../HomeContent'

export default function HomePage() {
  
  return (
    <>
      <Slider />
      {/* The HomeContent contains the HomeOverview component, current new release
      MovieList, and current classic MovieList */}
      <HomeContent />
    </>
  )
}
