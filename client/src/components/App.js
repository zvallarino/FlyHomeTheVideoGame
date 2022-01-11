import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppPage from './AppPage';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0);


  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
        console.log(user)
      }
    });
  }, []);

  if (user) {
    return <AppPage setUser={setUser} user={user} />;
  }

  return (

      <div className="App">
        <BrowserRouter>
          <Route path="/">
            <Home user = {user} setUser = {setUser}/>
          </Route>
          </BrowserRouter>
      </div>

  );}


export default App;