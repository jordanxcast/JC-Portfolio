import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import About from "./pages/About/About";
import Lifecycle from "./pages/Lifecycle/Lifecycle";
import Admin from "./pages/Admin/Admin";
import Blog from "./pages/Blog/Blog";
import BlogEntry from "./pages/BlogEntry/BlogEntry";
import BlogPost from "./pages/BlogPost/BlogPost";
import NotFoundPage from './pages/Utils/NotFoundPage'

function App() {
  return (
    <>
      <NavBar className="header" />
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio/lifecycle" component={Lifecycle} />
          <Route path="/admin" component={Admin} />
          <Route path="/blog-entry" component={BlogEntry} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:blog_id" component={BlogPost} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
