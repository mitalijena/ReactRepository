import React from 'react';
import './App.css';
import Form from './components/Form.js'
import TableComponent from './components/TableComponent.js'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      emailId: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId
    });

    this.setState({
      items,
      firstName: '',
      lastName: '',
      emailId: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newFirstName={ this.state.firstName }
          newLastName={ this.state.lastName }
          newEmailId={ this.state.emailId } />
          <TableComponent items={ this.state.items }/>
          
      </div>
    );
  }
  
}

export default App;
