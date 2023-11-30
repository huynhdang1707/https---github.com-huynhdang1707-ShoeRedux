import React, { Component } from 'react'

export default class CartShoe extends Component {
  render() {
    return <div className='col-6'>
        <div className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Img</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.cart.map((item)=>{
                    return(
                        <tr>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </div>

    </div>
      
    
  }
}
