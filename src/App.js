import './App.css';
import Modal from './Components/Modal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SharePage from './SharePage';


function App() {

  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Modal />
        </Route>
        <Route path="/share">
          <SharePage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
