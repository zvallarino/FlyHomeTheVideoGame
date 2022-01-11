import './App.css';
import { Switch, Route, useHistory, NavLink } from "react-router-dom";
import React, {useState, useRef} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import BackgroundHomePage from './BackgroundHomePage';

function Home({user, setUser, backgroundHomeRef, backgroundState, setBackground}) {

  const [login,setlogIn] = useState(false);
  const [signUp,setSignUp] = useState(false);
  const canvasChoiceRef = useRef(2);


  const loginSetter = () => {
    setBackground(dogs => !dogs)
    setlogIn(true)
    setSignUp(false)
  
    canvasChoiceRef.current = 1
    
  }

  const signInSetter = () => {
    setlogIn(false)
    setSignUp(true)
    setBackground(dogs => !dogs)
    canvasChoiceRef.current = 0
  }
 
 

  return (
    <div className = "home">
      <div className = 'homeBox'>
        <div className = "homelogin">
          <img src = "https://i.imgur.com/xJ2byat.png" onClick={loginSetter} alt = "signinbutton"/>
        </div>
        <div className = "signinSignUpBox">
          <div className = "signinSignUpTopSpacing"></div>
            <div className = "signinsignupForm">
              {login? <SignIn backgroundHomeRef = {backgroundHomeRef} setBackground = {setBackground} setUser = {setUser}/>:null}
              {signUp? <SignUp   backgroundHomeRef = {backgroundHomeRef}  setBackground = {setBackground} setUser = {setUser}/>:null}
              </div>
            <div className = "signinSignUpBottomSpacing"></div>
         </div>
        <div className = "homesignup">
          <img src = "https://i.imgur.com/xMCeFcv.png" onClick = {signInSetter} alt ="signupbutton"/>
        </div>
      </div>
      <BackgroundHomePage backgroundHomeRef = {backgroundHomeRef} backgroundState ={backgroundState} canvasChoiceRef = {canvasChoiceRef}/>
      <Route exact path = "/signup">
        <SignUp />
      </Route>
    </div>
  );
}

export default Home;