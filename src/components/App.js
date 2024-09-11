import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage'
import MovieInfoPage from './pages/MovieInfoPage'
import BookingPage from './pages/BookingPage'
import DiscountPage from './pages/DiscountPage'
import CafeMenuPage from './pages/CafeMenuPage'
import ContactUsPage from './pages/ContactUsPage'
import Header from './Header'
import Footer from './Footer'


function App() {

  return (
    <BrowserRouter>
      <header className="bg-dark">
        
        {/* The Header component contains the navigation menu */}
        <Header />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/discount"
            element={<DiscountPage />}
          />
          <Route
            path="/upcomingmovies"
            element={<UpcomingMoviesPage />}
          />
          <Route
            path="/cafemenu"
            element={<CafeMenuPage />}
          />
          <Route
            path="/contactus"
            element={<ContactUsPage />}
          />

          <Route
            path="/movies/:movieid"
            element={<MovieInfoPage />}
          />
          <Route
            path="/movies/:movieid/booking"
            element={<BookingPage />}
          />
        </Routes>
      </main>
      <footer class="footer-container">
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
