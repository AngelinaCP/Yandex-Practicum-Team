import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Layout from './components/Layout'
import RoutesList from './components/RoutesList'
import 'minireset.css'
import defaultTheme from '@/styles/themes'

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
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <RoutesList />
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
