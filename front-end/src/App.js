import './App.css';
import Navbar from './Navbar';
import {Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from './Home';
import LoginOrRegister from './LoginOrRegister';
import NotFound from './NotFound';
import RecipePage from './RecipePage';
import Profile from './Profile';
import AppContext from './AppContext';
import { useEffect, useState } from 'react';
import BrowseIngrediants from './BrowseIngediants';
import Logout from './Logout';
import "./fonts/AmaticSC-Regular.ttf"


function App() {

  //if we set our jwtoken as a piece of state on register or login, we can send this to API calls to the backend
  //pro: should be easily implemented 
  //cons: think state does not persist once we close the browser

  //we can send the token with each axios call to localhost:3001?
  //we set user to the value of the token. allowing authorization for things such as user.get
  let [user, setUser] = useState(null)




  return (
    <>
    <AppContext.Provider value={{user, setUser}}>
    <div className="App">
      <Navbar/>
      <h1 className='amatic-header'>Whats in my fridge??!</h1>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="loginregister" element={<LoginOrRegister/>}></Route>
      <Route path="ingrediants" element={<BrowseIngrediants/>}></Route>
      <Route path="recipes" element={<RecipePage/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      <Route path="logout" element={<Logout/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
    </AppContext.Provider>
    </>
  );
}

export default App;
