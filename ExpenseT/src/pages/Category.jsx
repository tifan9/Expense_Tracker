import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Category = () => {
  const [category, setCategory] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    loadCategory();
  },[]);
  const loadCategory = async () =>{
    const result = await axios.get("/category");
    setCategory(result.data);
  };

  
  return (
    <div>
    <h1 className="font-bold text-2xl mb-6">Add a new post</h1>
    <p>
    Wrap a pair of{' '}
    <code>
      {`<Input>`}
    </code>
    {' '}and{' '}
    <code>
      {`<Label>`}
    </code>
    {' '}components in{' '}
    <code>
      {`<FormGroup floating>`}
    </code>
    {' '}to enable floating labels with Bootstrap’s textual form fields. A{' '}
    <code>
      placeholder
    </code>
    {' '}is required on each{' '}
    <code>
      {`<Input>`}
    </code>
    {' '}as our method of CSS-only floating labels uses the{' '}
    <code>
      :placeholder-shown
    </code>
    {' '}pseudo-element. Also note that the{' '}
    <code>
      {`<Input>`}
    </code>
    {' '}must come first so we can utilize a sibling selector (e.g.,{' '}
    <code>
      ~
    </code>
    ).
  </p>
  <Form>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <label for="examplePassword">
        Password
      </label>
    </FormGroup>
    {' '}
    <Button>
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default Category
