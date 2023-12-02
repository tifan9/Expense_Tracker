import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Sidebar from './layout/Sidebar'
import Home from './components/Home'
import Account from './components/Account'
import Expense from './components/Expense'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/account/:id" element={<Account />} />
          <Route exact path="/expense/:id" element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
