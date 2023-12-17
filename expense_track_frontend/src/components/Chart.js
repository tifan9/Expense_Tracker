import React, { useEffect, useState } from 'react'
import {Chart as ChartJS, BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2'
import axios from 'axios';

ChartJS.register (
    BarElement
)
const Chart = () => {
    const [chart, setChart] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const expenseDetail = async () => {
        axios.get("http://localhost:3000/expenses")
    }
    useEffect(() => {
        loadExpense();
      }, []);
      const loadExpense = async () => {
        const result = await axios.get('http://localhost:8080/expenses', {
          validateStatus: () => true,
        });
        if (result.status === 302) {
          setExpenses(result.data);
        }
      };
      const selectChart = (e) => {
        axios.get('http://localhost:8080/expenses')
            .then(res => {
                let date = [];
                let amount =[];
                
            })
      }
  return (
    <div className="container">
        <h4 className="text-center text-primary mt-2 mb-3">Graph Chart in ReactJS</h4> 
        <h6 className="text-center text-success mt-2 mb-3">Country By Defence Budget</h6> 
        <div className="row mt-3">
           <div className="col-sm-3">
            
              <div className=""> 
               <table class=" table-bordered graphTable ">
                
                <tr>
                    <th>Month</th>
                    <th>Budget</th>
                </tr> 
                  { expenses.map((name)=>
                    <tr>
                      <td>{name.date}</td>
                      <td>${name.amount}</td>
                    </tr>                  
                 )}   
               </table>     
             </div>
           </div>     
           <div className="col-sm-9">
           <Bar
             data={chart}
                options={{
                    title:{
                      display:true,
                      text:'Average Rainfall per month',
                      fontSize:20
                    },
                    legend:{
                      display:true,
                      position:'right'
                    }
                }}
                />
            </div>
             
        </div>     
     </div>   
  )
}

export default Chart
