import React from 'react';

import ContentWrapper from './../components/ContentWrapper.jsx';

const Dashboard = () => (
  <ContentWrapper className="dashboard backend">
    <h1>Dashboard</h1>

    <h2>Textformatierungen</h2>
    <p>
      Bei Textfeldern die mit "Zeilenumbruch erlaubt" gekennzeichnet sind,
      kann per <strong>&lt;br/&gt;</strong> ein HTML-Umbruch erzeugt werden.
    </p>
    <p><br/></p>
    <p>
      Bei Textfeldern die mit "Markdown erlaubt" gekennzeichnet sind,
      sind einige Markdown Formatierungen m&ouml;glich. Beispiele:
    </p>

    <h3>Texthervorhebung</h3>
    <pre><code>
      <ul>
        <li><strong>Bold</strong> -- **Bold**</li>
        <li><em>Italic</em> -- *Italic*</li>
      </ul>
    </code></pre>

    <h3>Listen</h3>
    <pre><code>
      <p>
        1. Erster Listeneintrag<br/>
        2. Zweiter Listeneintrag<br/>
        3. Dritter Listeneintrag<br/>
      </p>
    </code></pre>

    <h3>Links</h3>
    <pre><code>
      <p>
        [Linktext](http://telekom.de)
      </p>
    </code></pre>
    <p>
      (Links werden in manchen Bereichen der Site als Buttons dargestellt.)
    </p>

    <h3>Farben</h3>
    <p>
      Dort wo Farben angegeben werden k&ouml;nnen, sind alle g&uuml;ltigen
      CSS-Werte erlaubt, also z.b. 'red' oder '#FF0000'.
    </p>
    <p>
      Gebr&auml;uchliche Farben sind&nbsp; 
      <span style={{color: '#e20074'}}>Magenta (#E20074)</span>,&nbsp;
      <span style={{background: '#f8f8f8'}}>Hintergrund-Grau (#F8F8F8)</span>
      &nbsp;und Weiß (#FFF).
    </p>



    
  </ContentWrapper>
);

export default Dashboard;
