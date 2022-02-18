import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Packaging from './Packaging'
import Motion from './Motion'
import WebDev from './WebDev'

export default function App() {
  return (
<Router>
    <div>
          <nav class = "navMenu">
            <div class = "grid grid-cols-2">
              <div> <Link to ="./"> <button class = "basic-button" style = {{marginRight: 30}}> HOME </button> </Link>  </div>
              <div class = "navLinks">
              <button class = "basic-button"  onClick={(e) => {e.preventDefault(); window.open('https://www.fiverr.com/kailstudio');}}> PLACE ORDER </button> <br/>
              </div>
            </div>
          </nav>
            <Switch>
              <Route exact path ='/'>
                  < Home />
               </Route>

               <Route exact path ='/packaging'>
                  < Packaging />
               </Route>

               <Route exact path ='/motion'>
                  < Motion />
               </Route>

               <Route exact path ='/webdev'>
                  < WebDev />
               </Route>

            </Switch>
              <div class = "footer grid-cols-1 mx-auto">
                  <p> © 2022 STUDIO KA IL All Rights Reserved. </p>
              </div>
      </div> 
  </Router>
  )
} 
