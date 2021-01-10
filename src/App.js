import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Student from './Components/Student/Student';
import Teacher from './Components/Teacher/Teacher';
import Schedule from './Components/Schedule/Schedule';
import { createContext, useState} from 'react';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';


export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState();
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route exact path="/login">
          <Login></Login>
          </Route>
          <Route exact path="/">
          <Login></Login>
          </Route>
          <Route path="/student">
             <Student></Student>
          </Route>
          <Route path="/teacher">
            <Teacher></Teacher>
          </Route>
          <Route path="/schedule">
           <Schedule></Schedule>
          </Route>
          <Route path="/header">
              <Header></Header>
          </Route>
         <Route path="/course">
           <Course></Course>
         </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
