import React from 'react'
import './App.css';
import LoadingPage from "./components/LoadingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Sports from './pages/Sports';
import Esports from './pages/Esports';
import Gadgets from './pages/Gadgets';
import Cooking from './pages/Cooking';
import Category from './pages/Category';

function App() {

  return (
    <>
      <div className="App">
        <LoadingPage />
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact-us' exact component={Contact} />
            <Route path='/sign-up' exact component={Signup} />
            <Route path='/sports' exact component={Sports} />
            <Route path='/e-sports' exact component={Esports} />
            <Route path='/gadgets' exact component={Gadgets} />
            <Route path='/cooking' exact component={Cooking} />
            <Route path='/category' exact component={Category} />
          </Switch>
        </Router>
      </div>
      
    </>
  );
}

export default App;
