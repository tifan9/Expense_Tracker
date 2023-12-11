import React, {Component} from 'react'
import AppNav from '../components/AppNav';

class Category extends Component {
    state ={
        isLoading :true,
        Categories : []
    }
    async componentDidMount() {
        const response = await fetch('/category')
        const body = await response.json();
        this.setState({
            categories :body,
            isLoading: false
        });
    }
    render () {
        const {Categories , isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
        return (
            <div>
            <AppNav />
                    <h2>Categories</h2>
                    {
                        Categories.map( category => 
                            <div id={category.id}>
                                {category.name}
                            </div>
                        )

                    }

                </div>
        );
    }
}
export default Category;
