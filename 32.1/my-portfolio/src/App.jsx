import { Box, CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import TodoPage from './pages/TodoPage.jsx'
import SwapiPage from './pages/SwapiPage.jsx'
import './App.css'

function App() {
  return (
    <>
      <CssBaseline />
      <Box className="page">
        <Header />

        <Box className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/swapi" element={<SwapiPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </>
  )
}

export default App
