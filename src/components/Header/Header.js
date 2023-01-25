import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__logoCont">
                    <div className="header__logo">
                        <img src="/logo.png" alt='logo_wealth' className='header__logo__img' />
                        <p className='header__logo__title'>Wealth Health</p>
                    </div>
                    <p className="header__logoCont__title">H R n e t</p>
                </Link>
                <div className="header__menu">
                    <Link to="/create" className="header__menu__link">Create employee</Link>
                    <Link to="/list" className="header__menu__link">Employee list</Link>
                </div>
            </nav>
        </header>
    )
}