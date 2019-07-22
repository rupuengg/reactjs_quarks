import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './Comps/Home';
import Giphy from './Comps/Giphy';
import './App.css';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/giphy">Giphy</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/giphy" component={Giphy}></Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
