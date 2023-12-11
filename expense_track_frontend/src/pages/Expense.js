import React, {Component} from 'react';
import AppNav from '../components/AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Expense extends Component {
    state = {}
    render(){
        return (
            <div>
            <AppNav />
            <container>
                <Form>
                    <FormGroup>
                        <label for="type">Type</label>
                        <input type="text" name ="type" id= "type" onChange={this.handleChange}></input>
                    </FormGroup>
                    <FormGroup>
                        <label for="amount">Amount</label>
                        <input type="number" name ="amount" id= "amount" onChange={this.handleChange}></input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category" >Category</Label>
                        <select onChange={this.handleChange}>
                                {optionList}
                        </select>
                    
                    </FormGroup>
                    <FormGroup>
                        <Label for="expenseDate">Date</Label>
                        <DatePicker    selected={this.state.item.expensedate}  onChange={this.handleDateChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                    </Form>
                
            </container>
            </div>
        );
    }
}
export default Expense;