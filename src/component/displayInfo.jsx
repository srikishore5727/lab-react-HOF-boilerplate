import React, { Component } from 'react'

export class DisplayInfo extends Component {
  render() {
    return (
      <div>
       <tr>
            <td>ID: {this.props.id} </td>
            <td>Name: {this.props.name} </td>
            <td>User Type: {this.props.userType} </td>  
        </tr> 
      </div>
    )
  }
}

export default DisplayInfo
