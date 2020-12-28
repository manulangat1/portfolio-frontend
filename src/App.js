import './styles/main.scss';
import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/site/Home'
import About from './components/site/About'
import Contact from './components/site/Contact';
import Projects from './components/site/Projects';
import Blog from './components/site/Blog';
import BlogItem from './components/site/BlogItem';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import PrivateRoute from './components/common/PrivateRoute';
import { loadUser}  from './actions/auth';
import { HashRouter as Router,Route, Switch } from 'react-router-dom' 


import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
      <Provider store={store}>
        <section>
        <Router>
            <Header />
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/blog/:slug/" component={BlogItem} />
                  <Route exact path="/login/" component={Login} />
                  <PrivateRoute exact path="/admin/" component={Dashboard} />
                </Switch>
              </main>
            
            <Footer />
            </Router>
    </section>
      </Provider>
    )
  }
}
export default App;
