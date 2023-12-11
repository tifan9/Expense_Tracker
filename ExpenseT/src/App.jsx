import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Category from './pages/Category';
import Expense from './pages/Expense';
// import {Home, NoPage, Category, Expense} from './pages'



function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="expense" element={<Expense />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </Router>
  )
}

export default App
