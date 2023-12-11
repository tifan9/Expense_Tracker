import React, {Component} from 'react'

class Category extends Component {
    state ={
        isLoading :true,
        Categories : []
    }
    async componentDidMount() {
        const response = await fetch('/category')
    }
    render () {
        return ();
    }
}
export default Category;
