import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Experience from './pages/Experience/Experience'
import About from './pages/About/About'
import Lifecycle from './pages/Lifecycle/Lifecycle'
// import './App.css';

function App() {
  return (
    <>
      <NavBar />
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
            path='/experience'
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