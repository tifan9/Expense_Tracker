import React, { useState, useEffect } from 'react';
import '../App.css';
import AppNav from '../components/AppNav';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Input, Button, Label, FormGroup, Form } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const Expense = () => {
  let navigate= useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
    category: '',
    date:'',
  });
  const {description, amount, category,date} = formData;


  
  useEffect(() => {
    const fetchData = async () => {
      const categoriesResponse = await fetch("http://localhost:8080/category");
      const categoriesBody = await categoriesResponse.json();
      setCategories(categoriesBody);

      const expensesResponse = await fetch('http://localhost:8080/expenses');
      const expensesBody = await expensesResponse.json();
      setExpenses(expensesBody);

      setIsLoading(false);
    };

    fetchData();
  }, []);
// format the date

const formatDate = (date) => {
  const formattedDate = new Date(date).toISOString().split('T')[0];
  return formattedDate;
};



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  //save

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Format the date before sending it to the server
    const formattedDate = formatDate(date);
    try {
      const response = await fetch(`http://localhost:8080/expenses`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          description,
          amount,
          category,
          date: formattedDate,
        }),
      });
  
      if (!response.ok) {
        // Handle error response, e.g., show an error message to the user
        console.error('Error:', response.status);
        return;
      }
      console.log(formData); 
      navigate('/');
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };
  

  const title = <h2 
    style={{ display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    }}
  
  >Add Expense</h2>;

  if (isLoading) {
    return <div className='container '>
    <h2 
          style={{ display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' }}>Loading...</h2>
          </div>;
  }

  const optionList = categories.map((category) => (
    <option value={category.categoryId} key={category.categoryId}>
      {category.categoryName}
    </option>
  ));

  return (
    <div>
      <AppNav />
      <div className='container'>
        <Container>
          {title}

          <Form onSubmit={(e)=>handleSubmit(e)}>
            <FormGroup floating>
              <Input
                id="description"
                name="description"
                placeholder="Enter Expense description"
                type="text"
                value={description}
                onChange={(e)=>handleChange(e)}
                required
              />
              <Label for="description">description</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e)=>handleChange(e)}
                required
              />
              <Label for="amount">Amount</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="category"
                name="category"
                type="select"
                value={category}
                onChange={(e)=>handleChange(e)}
                required
              >
                {optionList}
              </Input>
              <Label for="category">Category</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="date"
                name="date"
                placeholder="date placeholder"
                type="date"
                value={date}
                onChange={(e)=>handleChange(e)}
                required
              />
              <Label for="date">Date</Label>
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{' '}
              <Button color="secondary" tag={Link} to="/">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Expense;
