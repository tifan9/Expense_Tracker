import React from 'react'
import Sidebar from '../layout/Sidebar'
import './home.css'
function Home() {
  return (
    <>
    <Sidebar />
    <header>
        <div>
          <h5>Total Balance</h5>
          <span id="balance">$0.00</span>
        </div>
        <div>
          <h5>Income</h5>
          <span id="income">$0.00</span>
        </div>
        <div>
          <h5>Expense</h5>
          <span id="expense">$0.00</span>
        </div>
      </header>
    </>
    
  )
}

export default Home
