import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import React, {useState, useRef} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import BackgroundHomeCanvas from './BackgroundHomePage';

function TestingUser({user, setUser}) {
console.log("user")
  

  return (
    <div className = "home">
    HELLO
    </div>
  );
}

export default TestingUser;