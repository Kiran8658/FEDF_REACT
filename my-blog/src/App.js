import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {

  return ( 

    <Router>

       <div className="content">
          <Navbar/>
          <div className="content">Hello World</div>
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/create">
            <Create />
            </Route>
          </Switch>

       </div>

    </Router>

   );
}
 
export default App;