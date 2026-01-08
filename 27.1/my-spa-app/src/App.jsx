import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import ErrorBoundary from './components/ErrorBoundary'
import { useState } from 'react'
import './App.css'

function App() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className={`app ${theme}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />

            <main className="main-content">
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home theme={theme} />} />
                        <Route path="/contacts" element={<Contacts theme={theme} />} />
                        <Route path="/about" element={<About theme={theme} />} />
                    </Routes>
                </ErrorBoundary>
            </main>
        </div>
    )
}

export default App