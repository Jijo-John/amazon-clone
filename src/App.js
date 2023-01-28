
import './App.css';

// paths
// /checkout
// /login 
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <Router>
        <div className="app">
          <Header />
          <Home />
        </div>
    </Router>
  );
} 



export default App;
