
import './App.css';

// paths
// /checkout
// /login 
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <Router>
        <div className="app">
          <Header />
        </div>
    </Router>
  );
} 



export default App;
