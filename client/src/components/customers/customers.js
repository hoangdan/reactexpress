import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

  constructor(){
    super();
    this.state = {
      customers: [],
      lists: []
    }
  }

  componentDidMount(){
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched..',
       customers)))
      .catch(err => console.error(err));
    
    fetch('/api/hello')
      .then(res => res.json())
      .then(lists => this.setState({lists}, () => console.log('Customers fetched..',
      lists)));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          <div>
           {this.state.customers.map(customers => <li key={customers.id}>{customers.firstname} {customers.lastname}</li>)}
           {this.state.lists.map(lists => <li>{lists.age} {lists.mmr}</li>)}
          </div>
        </ul>
      </div>
    );
  }
}

export default Customers;
