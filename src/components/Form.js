import React from 'react'
//import {connect} from 'react-redux'
//import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids'
//import data from '../dataSource.json'
import '../FirstComponent.css'

class Form extends React.Component {
    
    render() {
        return (
            <div id="Form">
                <h3>Add a new item to the table:</h3>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label htmlFor="firstName">
                        FirstName:
                        <input id="firstName" value={this.props.newFirstName}
                            type="text" name="firstName"
                            onChange={this.props.handleInputChange} />
                    </label>
                    <label for="lastName">
                        LastName:
                        <input id="lastName" value={this.props.newLastName}
                            type="text" name="lastName"
                            onChange={this.props.handleInputChange} />
                    </label>
                    <label htmlFor="emailId">
                        Email ID:
                        <input id="emailId" value={this.props.newEmailId}
                            type="text" name="emailId"
                            onChange={this.props.handleInputChange} />
                    </label>
                    <button type="submit" value="Submit">Add Item</button>
                </form>
            </div>
        )
    }
}

/*const mapStateToProps = (state) => {
    return {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        emailId : this.state.emailId
    }

}

export default connect(mapStateToProps)(FormComponent)*/

export default Form