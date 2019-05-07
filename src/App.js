import React, { Component } from 'react';

// bootstrap and custom styles
import './App.css';

// routing
import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect 
} from "react-router-dom";

// pages
import MainPage from './pages/index.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import ErrorPage from './pages/404.jsx';

// components
import Layout from './components/Layout';
import Header from './components/Header';

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import MatchesPage from './pages/matches';
library.add(faHome);

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Layout>
          <Router>
            <Switch>
              {/* Home */}
              <Route exact path="/" component={MainPage} />
              {/* About */}
              <Route exact path="/about" component={AboutPage} />
              {/* Matches */}
              <Route exact path="/mymatches" component={MatchesPage} />
              {/* Contact */}
              <Route exact path="/contact" component={ContactPage} />
              {/* 404s */}
              <Route exact path="/404" component={ErrorPage} />
              <Redirect to="/404"/>
            </Switch>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
