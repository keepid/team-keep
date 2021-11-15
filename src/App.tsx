import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './static/styles/App.scss';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Issue from './components/Issue';
import Stories from './components/Stories';

window.onload = () => {
  ReactGA.initialize('G-H1CSQJ6BGQ');
  ReactGA.pageview(window.location.pathname + window.location.search);
};

interface State {
  isLoggedIn: boolean;
}

class App extends React.Component<{}, State, {}> {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app">
            <Helmet>
              <title>Team Keep</title>
              <meta
                name="description"
                content="Securely Combating Homelessness"
              />
            </Helmet>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" render={() => <Home />} />
              {/* <Route path="/contact-us" render={() => <ContactUs />} /> */}
              <Route path="/about-us" render={() => <AboutUs />} />
              <Route path="/stories" render={() => <Stories />} />
              <Route
                path="/Issue"
                render={() => <Issue />}
              />
              <Route path="/error">
                <Error />
              </Route>
              <Route>
                <Redirect to="/error" />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
