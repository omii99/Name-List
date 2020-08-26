import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NameList from './component/NameList';
import Headerbar from './component/header/Headerbar';
import Home from './component/pages/Home/Home';
import About from './component/pages/About/About';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Headerbar />
        <Switch>
          <Route path="/about" > <About /></Route>
          <Route path="/nameList" ><NameList /></Route>
          <Route path="/" > <Home /></Route>
        </Switch>


      </BrowserRouter>

    </div>

  );
}

export default App;
