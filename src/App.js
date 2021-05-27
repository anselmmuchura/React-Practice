import './App.css';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <Nav /> 
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/create">
            <Create /> 
          </Route> 
          <Route path="/blogs/:id">
            <BlogDetails /> 
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
