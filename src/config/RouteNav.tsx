import React from 'react';  
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'; 
import About from '../pages/aboutPage/About';
import Users from '../pages/usersPage/Users';
import Contact from '../pages/contactPage/Contact'; 
import NotFound from '../pages/notFoundPage/NotFound';

export default function Routing ()  { 
  return(
  <Router>  
    <div>  
      <h1>React Router Example</h1>
      <ul>  
        <li>  
          <NavLink to="/"  exact activeStyle={  
             {color:'red'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/users"  exact activeStyle={  
             {color:'green'}  
          }>Users</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact"  exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul> 
      <Switch>  
      <Route exact path="/" component={About} />  
      <Route path="/users" component={Users} />  
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />  
      </Switch>
    </div>  
  </Router>  
  )
}