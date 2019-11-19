import React from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import ListOfChannels from './components/listOfChannel/ListOfChannels';
import UserForm from './components/userForm/UserForm';
import {UserCard} from './components/userCard/UserCard';
import HomePage from './pages/homePage/HomePage';
import ConditionalRenderingPage from './pages/conditionalRendering/ConditionalRenderingPage';
import {ListAndArray} from './pages/listAndArrayPage/ListAndArray';
import Routing from '../src/config/RouteNav';
import StockList from './components/stockNameList';
import UserList from './components/userNameList';
// import Hoc from '../src/components/hoc/HocComp';
import AxiosSample from '../src/pages/axiosSamplePage/AxiosSample';

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

// const StocksData = [
//   {
//       id: 1,
//       name: 'TCS'
        
//   },
//   {
//       id: 2,
//       name: 'Infosys'
//   },
//   {
//       id: 3,
//       name: 'Reliance'
//   }
// ];
// const UsersData = [
//   {
//       id: 1,
//       name: 'Krunal'
        
//   },
//   {
//       id: 2,
//       name: 'Ankit'
//   },
//   {
//       id: 3,
//       name: 'Rushabh'
//   }
// ];

// const Stocks= Hoc(
//   StockList,
//   StocksData
// );

// const Users = Hoc(
//   UserList,
//   UsersData
// );
  
  return (
    <div>
      {/* <UserCard userData = {user}/>
      <UserForm/>    
      <Counter/>      
      <ListOfChannels/>
      <HomePage/>
      <ConditionalRenderingPage/>
      <ListAndArray data={data} />
      <ReactForm/> */      
     /* <Routing/> */}
  <AxiosSample/>
      
</div> 
  );
}

export default App;
