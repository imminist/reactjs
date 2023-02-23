import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainNavigation from './layout/MainNavigation'

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
