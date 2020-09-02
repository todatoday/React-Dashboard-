import React from 'react';
import Datatable from './component/Datatable/Datatable.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import SidNav from './component/SidNav/SidNav.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (


    <Router>
      <div>


      <Navbar />
      <SidNav />
    


        <Switch>

          <Route path="/" exact  component={Dashboard} />
          <Route path="/Data-tables"  component={Datatable} />
        </Switch>

</div>
    </Router>


  );
}

export default App;
