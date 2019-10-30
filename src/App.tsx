import React from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import ListOfChannels from './components/listOfChannel/ListOfChannels';
import UserForm from './components/userForm/UserForm';
import {UserCard} from './components/userCard/UserCard';
import HomePage from './pages/homePage/HomePage';
const App: React.FC = () => {
 
const user = {
  name: "Radhika",
  age: 23,
  address: "Pondicherry",
  dob: new Date()
}
  
  return (
    <div>
      {/* <UserCard userData = {user}/>
      <UserForm/>    
      <Counter/>      
      <ListOfChannels/> */}
      <HomePage/>
    
  </div> 
  );
}

export default App;
