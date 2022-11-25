import React from 'react';
import Tree from './Tree';
import Navbar from './componant/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TrainStudy from './graphcsv/TrainStudy.js';
import TrainImage from './graphcsv/TrainImage.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path='/image'>
          <Tree/>
        </Route>
        <Route exact path='/trainstudy'>
          <TrainStudy/>
        </Route>
        <Route exact path='/trainimage'>
          <TrainImage/>
        </Route>
      </div>
    </Router>
  );
}


export default App;
