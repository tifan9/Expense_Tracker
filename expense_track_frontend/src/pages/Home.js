import React, { useEffect, useState } from 'react';
import AppNav from '../components/AppNav';
import { Button, Table } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from '../components/Search';
import AmountSpentPerDayTable from '../components/AmountSpentPerDayTable';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Set the number of items to display per page

  useEffect(() => {
    loadExpense();
    loadCategory();
  }, []);

  const loadExpense = async () => {
    const result = await axios.get('http://localhost:8080/expenses', {
      validateStatus: () => true,
    });
    if (result.status === 302) {
      setExpenses(result.data);
    }
  };

  const loadCategory = async () => {
    const result = await axios.get('http://localhost:8080/category', {
      validateStatus: () => true,
    });
    if (result.status === 302) {
      setCategory(result.data);
    }
  };

  const removeExpense = async (id) => {
    await fetch(`http://localhost:8080/expenses/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    loadExpense();
  };

  const filteredExpenses = expenses.filter((exp) => {
    const category =
      exp.category && exp.category.categoryName
        ? exp.category.categoryName.toLowerCase()
        : '';
    return (
      category.includes(search) ||
      exp.description.toLowerCase().includes(search) ||
      exp.amount.toString().includes(search) ||
      exp.date.includes(search)
    );
  });

  const pageCount = Math.ceil(filteredExpenses.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExpenses = filteredExpenses.slice(startIndex, endIndex);

  const rows = currentExpenses.map((expense, index) => (
    <tr key={expense.expenseId || index}>
      <td>{expense.expenseId}</td>
      <td>{expense.description}</td>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
      <td>{expense.category ? expense.category.categoryName : 'N/A'}</td>
      <td>
        <button
          className="btn btn-danger mx-2"
          onClick={() => removeExpense(expense.expenseId)}
        >
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
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
        }}
      >
        Welcome to easy expense app !
      </h2>

      <div className="container">
        <div className="row mb-6">
          <div className="col-md-10">
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="col-md-2">
            <Button tag={Link} to="/categories" color="primary" type="submit">
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
          <tbody>{renderTable()}</tbody>
        </table>
        <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            breakLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
        />
        <AmountSpentPerDayTable expenses={expenses} />
      </div>
    </div>
  );
};

export default Home;
