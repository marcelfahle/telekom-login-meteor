import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import BrandBar from './components/BrandBar.jsx';
import ContentWrapper from './components/ContentWrapper.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import AppPanel from './components/AppPanel.jsx';

import './App.scss';


//import Rebase from 're-base';

//var base = Rebase.createClass({
//  apiKey: "AIzaSyDQNjuj0vKaX5AjAz4aOpepoiLmjsMXw8Y",
//  authDomain: "telekom-login.firebaseapp.com",
//  databaseURL: "https://telekom-login.firebaseio.com",
//  storageBucket: "telekom-login.appspot.com",
//});

import Data from './../api/data.json';


var isSticky = false;


class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      isHeaderSticky: false,
      menu: false,
      appPanel: false,
      data: Data,
      home: Data.home,
      funktionen: Data.funktionen,
      sogehts: Data.sogehts,
      dienste: Data.dienste
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleAppMenu = this.toggleAppMenu.bind( this );
    this.setHeaderStickiness = this.setHeaderStickiness.bind( this );
    this.clickOnViewport = this.clickOnViewport.bind( this );
  }

  //init() {
  //  this.ref = base.syncState('home', {
  //    context: this,
  //    asArray: false,
  //    state: 'home'
  //  });
  //  this.reffunktionen = base.syncState('funktionen', {
  //    context: this,
  //    asArray: false,
  //    state: 'funktionen'
  //  });
  //  this.reffunktionen = base.syncState('sogehts', {
  //    context: this,
  //    asArray: false,
  //    state: 'sogehts'
  //  });
  //}


  componentWillUnmount(){
    //base.removeBinding(this.ref);
  }

  componentWillReceiveProps(){
    //base.removeBinding(this.ref);
    //this.init();
  }

  componentWillMount () {
    //this.init();
  }



  componentDidMount() {
    window.onscroll = () => {
      if(window.pageYOffset > 80) {
        this.setHeaderStickiness( true );
      } else {
        this.setHeaderStickiness( false );
      }
    }
  }

  toggleMenu( e ) {
    this.setState({menu: !this.state.menu});
  }

  toggleAppMenu( e ) {
    e.preventDefault();
    this.setState({appPanel: !this.state.appPanel});
  }

  clickOnViewport( e ) {
    if (this.state.appPanel) {
      this.setState( { appPanel: false } );
    }
  }

  setHeaderStickiness( sticky ) {
    if (sticky !== isSticky) {
      isSticky = sticky;
      const wrap = document.getElementsByClassName('viewport')[0];
      wrap.classList.toggle( 'sticky' );
    }
  }

  render() {
    const headerClasses = classNames({
      'menu': this.state.menu,
      'show-app-panel': this.state.appPanel
    });
    return(
      <div className="viewport" onClick={this.clickOnViewport}>
        <header className={headerClasses}>
          <BrandBar />
          <NavBar toggleMenu={this.toggleMenu} toggleAppMenu={this.toggleAppMenu} />
          
          <AppPanel data={ this.state.dienste } />
        </header>
        <main>
          {this.props.children && React.cloneElement(this.props.children, {
            data: this.state
          })}
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
