import {NavLink} from 'react-router-dom'
import './Header.css'
import untitled from './untitled.svg';

function Header({theme, toggleTheme}) {
    return (
        <header className="header">
            <div className="header-inner">
                <img src={untitled} alt=""/>
                <nav className="nav">
                    <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                        Main
                    </NavLink>

                    <NavLink to="/contacts" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                        Contacts
                    </NavLink>

                    <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                        About
                    </NavLink>
                </nav>

                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Set Dark theme' : '☀️ Set Light theme'}
                </button>
            </div>
        </header>
    )
}

export default Header