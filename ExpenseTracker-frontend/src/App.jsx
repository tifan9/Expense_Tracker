import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
//import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/cdbootstrap/css/cdb.min.css'
import Sidebar from './layout/Sidebar'
import Home from './components/Home'
import Account from './components/Account'
import Expense from './components/Expense'

function App() {
  return (
    
    <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
    </Router>
  )
}

export default App
