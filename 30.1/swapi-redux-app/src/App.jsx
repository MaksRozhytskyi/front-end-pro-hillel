import ApiViewer from './components/ApiViewer'
import './App.css'

export default function App() {
    return (<div className="app">
        <header className="app-header">
            <h1>SWAPI</h1>
        </header>
        <main className="app-main">
            <ApiViewer/>
        </main>
    </div>)
}