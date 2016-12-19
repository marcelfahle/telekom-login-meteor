import React from 'react';
import { Link } from 'react-router';

import './Footer.scss';


const Footer = ({settings}) => (
  <footer>
    <nav className="footer__nav">
      <ul>
        <li><Link to="/funktionen">Funktionen</Link></li>
        <li><Link to="/so-gehts">So geht's</Link></li>
        {/*<li><Link to="/login-mit-telekom">Login mit Telekom</Link></li>*/}
        {/*<li><Link to="/telekom-login-fuer-ihre-website">Telekom Login für Ihre Website</Link></li>*/}
      </ul>
    </nav>

    <div className="footer__social">
      <h4>Folgen Sie uns im Social Web:</h4>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src="/images/footer-fb.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/footer-twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/footer-google.svg" alt="google plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/footer-share.svg" alt="Share" />
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="footer__meta">
      <p className="footer__copyright">
        { settings.copyright || '' }
      </p>
      <nav>
        <ul>
          {/*<li><a href="#">Geschäftskunden</a></li>*/}
          <li><a href="http://www.telekom.de/hilfe/vertrag-meine-daten/login-daten-passwoerter" target="_blank">Telekom Hilft Community</a></li>
          {/*<li><a href="#">FAQ-Liste</a></li>*/}
          <li><a href="http://www.telekom.com/impressum" target="_blank">Impressum</a></li>
          <li><a href="http://www.telekom.de/datenschutz-ganz-einfach" target="_blank">Datenschutz</a></li>
        </ul>
      </nav>
    </div>
    
  
  </footer>
)

export default Footer;
