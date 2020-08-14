import React from 'react'
import {Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class TableComponent extends Component {
    
    render(){
    const items = this.props.items;
    return (
      <div id="Table"> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell>EmailID</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {items.map(item => {
              return (
                <TableRow>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.emailId}</TableCell>
                </TableRow>
              );
            })}
            </TableBody>
        </Table>
      </div>
    );
    }
}

export default TableComponent