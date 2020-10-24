import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Body from './components/Home/Body';
import Header from './components/Header/Header';
import YourDetails from './components/YourDetails/YourDetails';
import Payment from './components/Payment/Payment';

function App() {
  return (
  
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/your-details' component={YourDetails}/>
          <Route path='/' exact component={Body}/>
          <Route path='/payment' component={Payment}/>
        </Switch>        
      </div>
  );
}

export default App;
