import React from 'react';
import { Link } from 'react-router';

import './Footer.scss';



const linknum = [0,1,2,3,4,5]

const Footer = ({settings}) => (
  <footer>
    <nav className="footer__nav">
      <ul>
        <li><Link to="/funktionen">Funktionen</Link></li>
        <li><Link to="/so-gehts">So geht's</Link></li>
        { settings.loginwithtelekom ?
            <li><Link to="/login-mit-telekom">Login mit Telekom</Link></li> :
            ''
        }
        {/*<li><Link to="/telekom-login-fuer-ihre-website">Telekom Login für Ihre Website</Link></li>*/}
      </ul>
    </nav>

    <div className="footer__social">
      <h4>Folgen Sie uns im Social Web:</h4>
      <nav>
        <ul>
          {
            [1,2,3,4,5,6].map( i => {
              return(
                (settings[`sociallink${i}active`])?
                  <li>
                    <a href={settings[`sociallink${i}url`] }>
                      <img src={settings[`sociallink${i}img`]} alt={settings[`sociallink${i}`]} />
                    </a>
                  </li> :
                  ''
              )
            })
          }
        </ul>
      </nav>
    </div>

    <div className="footer__meta">
      <p className="footer__copyright">
        { settings.copyright || '' }
      </p>
      <nav>
        <ul>

          {
            [0,1,2,3,4,5].map( i => {
              const url = settings[`link${i}url`];
              const label = settings[`link${i}`];
              const window = settings[`link${i}target`] ? "_blank" : "_self";
              return (
                (settings[`link${i}active`]) ? <li><a href={url} target={window}>{label}</a></li> : ''
              )
            })  
          }    

        </ul>
      </nav>
    </div>
    
  
  </footer>
)

export default Footer;
