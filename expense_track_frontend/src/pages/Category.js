import React, { useState } from 'react';
import AppNav from '../components/AppNav';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Category = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState({
    category: '', 
  });
  const category = categories.category;

  const handleChange = (e) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Category value:", category);

    try {
      const response = await axios.post("http://localhost:8080/category", {
          categoryName: category,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

      console.log('Response:', response.data);

      if (response.status === 201) {
        console.log('Category added successfully');
        setCategories((prevCategories) => [...prevCategories, response.data]);
        navigate('/');
      } else {
        console.error('Error adding category');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <AppNav />
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Add Category
      </h2>
      <div className='container'>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="category">Category Name</Label>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="Enter Category Name"
              value={category}
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
          <div className="row">
            <div className="col-md-6">
              <Button color="primary" type="submit" className="w-100 mb-2">
                Save
              </Button>
            </div>
            <div className="col-md-6">
              <Button color="secondary" tag={Link} to="/" className="w-100">
                Cancel
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Category;
