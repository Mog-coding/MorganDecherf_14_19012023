import './Home.css';
import logo from "../../assets/logo.png"

/**
 * @description Home Page with Wealth Health logo
 */
export default function Home() {
    return (
        <main className="home__main">
            <article className="home__article">
                <img src={logo} alt="logo_wealth" className="home__logo" />
                <p>Welcome to Wealth Health HRnet</p>
            </article>
        </main>
    )
}