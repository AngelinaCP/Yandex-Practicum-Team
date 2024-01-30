import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { MainPage } from './pages/Main'
import { SignupPage } from './pages/Signup'
import ProfilePage from './pages/profile.page'
import GamePage from './pages/game.page'
import LeaderboardPage from './pages/leaderboard.page'
import { ForumPage } from './pages/Forum'
import TopicPage from './pages/topic.page'
import { Page404 } from './pages/Page_404'
import Navigation from './components/navigation'
import interceptorsProvider from '@/providers/interceptors.provider'
import { PrivateRoute } from '@/components/PrivateRoute'
import { GlobalWrapper } from './components/GlobalWrapper'
import { ForumPostPage } from '@/pages/ForumPost'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
    interceptorsProvider()
  }, [])

  return (
    <GlobalWrapper>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="forum">
              <Route index element={<ForumPage />} />
              <Route path=":forumId" element={<ForumPostPage />} />
            </Route>
            <Route path="topic" element={<TopicPage />} />
          </Route>
          <Route path="/" element={<MainPage />} index />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </GlobalWrapper>
  )
}

export default App
