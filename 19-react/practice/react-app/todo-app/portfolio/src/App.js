import React from "react"
import {BrowserRouter as Route, Route, Switch} from "react-router-dom"
import NavBar from "./Navabar"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"

function App (){
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path ="/" component={Home}>
         < Route path = "/about" component={About}>
         <Route path ="/project" component={Projects}>
          <Route path ="/resume" component={Resume}>
            <Route path="/contact" component={Contact}>
            </Route>

          </Route>
         </Route>
        </Route>
      </Switch>
    </Route>
  )
}

export default App;
