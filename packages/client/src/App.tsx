import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import MainPage from './pages/main.page'
import SignupPage from './pages/signup.page'
import ProfilePage from './pages/profile.page'
import GamePage from './pages/game.page'
import LeaderboardPage from './pages/leaderboard.page'
import ForumPage from './pages/forum.page'
import TopicPage from './pages/topic.page'
import Page404 from './pages/404.page'
import Navigation from './components/navigation'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} index />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="topic" element={<TopicPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
