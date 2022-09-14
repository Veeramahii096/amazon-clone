
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,
  Routes,Route}
from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        
        <Routes>
        <Route path='/login'element={<Login />} >
        
        </Route>

        <Route path='/checkout'element={<Checkout />} >
        
        </Route>
        <Route path='/'  element={<Home/>}>
    
        </Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
