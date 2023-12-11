import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='m-4 p-4 rounded-lg shadow-lg bg-white '>
    <header className="border-b pb-4">
    <nav className="flex items-center justify-between">
      <h1 className=" text-4xl font-bold text-indigo-600">Expense Tracker</h1>
      <div>
        <Link
          className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white ml-4"
          to="/addCategory"
        >
          Category
        </Link>
        <Link
          className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white ml-4"
          to="/AddExpense"
        >
          Expense
        </Link>
      </div>
    </nav>
  </header>

  <main className="py-8 px-2">
    <Outlet />
  </main>
    </div>
  )
}

export default Layout
