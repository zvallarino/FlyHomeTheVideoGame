import './App.css';
import { useState, useEffect,useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppPage from './AppPage';
import Home from './Home';
import TestingUser from './TestingUser';

function App() {
  const [count, setCount] = useState(0);
  const backgroundHomeRef = useRef(true);
  const [backgroundState,setBackground] = useState(false);


  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  const backgroundGroundSetter = () => {
    backgroundHomeRef.current = false;
    setBackground(whales=>!whales)
  }
  
  
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  if (user) {
    return <AppPage backgroundGroundSetter = {backgroundGroundSetter} setUser={setUser} user={user} backgroundHomeRef ={backgroundHomeRef} backgroundState ={backgroundState} setBackground ={setBackground} />;
  }

  return (

      <div className="App">
   
          <Route path="/">
            <Home user = {user} setUser = {setUser} backgroundHomeRef ={backgroundHomeRef} backgroundState ={backgroundState} setBackground ={setBackground}/>
          </Route>
      
      </div>

  );}


export default App;