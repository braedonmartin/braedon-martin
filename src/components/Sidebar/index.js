import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import './styles/index.scss';
import './styles/index_mobile.scss';

function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 930);
  
  useEffect(() => {
      window.addEventListener("resize", () => {
          const ismobile = window.innerWidth < 930;
          if (ismobile !== isMobile) setIsMobile(ismobile);
      }, false);
  }, [isMobile]);

  return (
      <div className={`${isMobile ? "nav-bar-mobile" : "nav-bar"}`}>
        <nav className="page-select">
          <NavLink
            className="home-link"
            exact="true"
            activeClassName="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink
            className="about-link"
            exact="true"
            activeClassName="active"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            className="portfolio-link"
            exact="true"
            activeClassName="active"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} />
          </NavLink>
          <NavLink
            className="contact-link"
            exact="true"
            activeClassName="active"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </nav>

        <ul className="outside-acc">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/braedon-martin-4b0838173/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/braedonmartin"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discordapp.com/users/3567/"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Sidebar
