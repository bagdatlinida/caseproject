
import './App.css';
import Base from './components/Base';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Games from'./components/Games';
import Results from'./components/Results';



function App() {
  return (
    <div className="App">
    
    <Router>
   <Switch>

    <Route path="/games">
    <Games />
    </Route>

    <Route path="/results">
    <Games Results/>
    </Route>

    <Route path="/">
      <Base/>
    </Route>
        
        </Switch>
        </Router>
    </div>
  );
}

export default App;
