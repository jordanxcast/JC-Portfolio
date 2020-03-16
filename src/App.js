import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Experience from './components/Resume/Resume'
import About from './components/About/About'
import Lifecycle from './components/Lifecycle/Lifecycle'
import './App.css';

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="App">
        <Switch>
          <Route 
            exact
            path='/'
            component={Home}
          />
          <Route 
            exact
            path='/about'
            component={About}
          />
          <Route 
            exact
            path='/resume'
            component={Experience}
          />
          <Route 
            exact
            path='/projects'
            component={Projects}
          />
          <Route 
            exact
            path='/contact'
            component={Contact}
          />
          <Route 
            exact
            path='/portfolio/lifecycle'
            component={Lifecycle}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;