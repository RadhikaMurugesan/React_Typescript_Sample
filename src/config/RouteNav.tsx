import React from 'react';  
import { Route, NavLink, BrowserRouter as Router, Switch, RouteComponentProps } from 'react-router-dom'; 
import About from '../pages/aboutPage/About';
import Users from '../pages/usersPage/Users';
import Contact from '../pages/contactPage/Contact'; 
import NotFound from '../pages/notFoundPage/NotFound';
import UserProps from '../models/UsersInterface';

type TParams = { id: string };

export default function Routing ()  { 
  const users : UserProps[] = [
    { id: 1, name: 'Akash', quote: 'Hello world!' },
    { id: 2, name: 'Aaradhana', quote: 'Hello again!' }
  ]
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
      <Route path="/user/:id"  render={({match}) => (
       <Users userProps={users.find(u => u.id === match.params.id)} />
)}  />  
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />  
      </Switch>
    </div>  
  </Router>  
  )
}