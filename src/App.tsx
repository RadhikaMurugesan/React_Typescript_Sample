import React from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import ListOfChannels from './components/listOfChannel/ListOfChannels';
import UserForm from './components/userForm/UserForm';
import {UserCard} from './components/userCard/UserCard';
import HomePage from './pages/homePage/HomePage';
import ConditionalRenderingPage from './pages/conditionalRendering/ConditionalRenderingPage';
import {ListAndArray} from './pages/listAndArrayPage/ListAndArray';
const App: React.FC = () => {
 
const user = {
  name: "Radhika",
  age: 23,
  address: "Pondicherry",
  dob: new Date()
}

const data = [  
  {id: 1, title: 'First', content: 'Welcome to JavaTpoint!!'},  
  {id: 2, title: 'Second', content: 'It is the best ReactJS Tutorial!!'},  
  {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS topics!!'}  
];  
  
  return (
    <div>
      {/* <UserCard userData = {user}/>
      <UserForm/>    
      <Counter/>      
      <ListOfChannels/> */}
      {/* <HomePage/>
      <ConditionalRenderingPage/> */}
      <ListAndArray data={data} />
  </div> 
  );
}

export default App;
