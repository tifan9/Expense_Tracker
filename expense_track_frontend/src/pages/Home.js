import React, { useEffect, useState } from 'react';
import AppNav from '../components/AppNav';
import { Button, Table } from 'reactstrap';
import {FaTrashAlt} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import Search from '../components/Search';
const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams();

  useEffect(()=>{
    loadExpense();
    loadCategory();
  },[]);
  const loadExpense = async () => {
    const result = await axios.get("http://localhost:8080/expenses",{
      validateStatus : () => {
        return true;
      }
    });
    if(result.status === 302){
      setExpenses(result.data); 
    }
    };
    const loadCategory= async () => {
      const result = await axios.get("http://localhost:8080/category",{
        validateStatus : () => {
          return true;
        }
      });
      if(result.status === 302){
        setCategory(result.data); 
      }
      };

      // delete expense
      const removeExpense = async (id) => {
        await fetch(`http://localhost:8080/expenses/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        loadExpense();
      };
      
      const filteredExpenses = expenses.filter((exp) => {
        const category = exp.category && exp.category.categoryName
          ? exp.category.categoryName.toLowerCase()
          : '';
        return (
          category.includes(search) ||
          exp.description.toLowerCase().includes(search) ||
          exp.amount.toString().includes(search) ||
          exp.date.includes(search)
        );
      });

      const rows = filteredExpenses.map((expense, index) => (
        <tr key={expense.expenseId || index}>
          <td>{expense.expenseId}</td>
          <td>{expense.description}</td>
          <td>{expense.amount}</td>
          <td>{expense.date}</td>
          <td>{expense.category ? expense.category.categoryName : 'N/A'}</td>
          <td>
            <button className="btn btn-danger mx-2" onClick={() => removeExpense(expense.expenseId)}>
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      ));
      
      const renderTable = () => {
        if (rows.length === 0) {
          return (
            <tr>
              <td colSpan="6" className="text-center opacity-50">
              <h4>No matching expenses found.</h4>
                
              </td>
            </tr>
          );
        }
    
        return rows;
      };
  return (
    <div>
      <AppNav />
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        Welcome to easy expense app !
      </h2>
      
      <div className='container'>
      <div className="row mb-6">
    <div className="col-md-10">
      <Search search={search} setSearch={setSearch} />
    </div>
    <div className="col-md-2">
      <Button tag={Link} to="/categories" color="primary" type='submit'>
        Add Category
      </Button>
    </div>
  </div>
      <table className="table border shadow table-hover ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {renderTable()}
      </tbody>
    </table>
      </div>
    </div>
  );
};

export default Home;
