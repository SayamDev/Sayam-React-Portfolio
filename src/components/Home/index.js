import {Link} from 'react-router-dom'
import './index.css'

export const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                
                Sayam
                <br />
                web developer
                </h1>
                <h2>Junior Frontend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}