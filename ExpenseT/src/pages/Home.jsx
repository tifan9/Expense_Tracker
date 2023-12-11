import { useEffect, useState } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa'
const Home = () => {
  const [expenses, setExpenses] = useState([]);

  const { id } = useParams();

  useEffect(()=>{
    loadExpense();
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
    const deleteExpense = async (id) => {
      await axios.delete("http://localhost:8080/expenses/delete/${id}");
      loadExpense();
    }

  return (
    <div>
    <h1 className="text-6xl font-bold">Welcome</h1>
    <br/>
    <table className="table border shadow table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Type</th>
        <th scope="col">Date</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense, index) => (
        <tr key={expense.id}>
        <th scope="row" key={index}>{index + 1}</th>
        <td>{expense.id}</td>
        <td>{expense.date}</td>
        <td>{expense.amount}</td>
        <td>{expense.id}</td>
        <td>
                  <button
                    className="btn btn-danger mx-2"
                    
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                </tr>
      ))}
      
        
    </tbody>
  </table>
    </div>
  )
}

export default Home
