import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
