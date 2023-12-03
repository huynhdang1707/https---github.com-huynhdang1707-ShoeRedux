import React, { Component } from 'react'
import ItemShoe from './ItemShoe'
import { connect } from 'react-redux'

 class ListShoe extends Component {
  render() {
    let {list} = this.props
    return (
      <div className='row col-6'style={{float:'right'}}>{list.map((item)=>{
        return <ItemShoe key={item.id} data={item}/>
      })}</div>
    )
  }
}


let mapStateToProps = (state) =>{
    return{
        list : state.shoeArr
    }
}




export default connect(mapStateToProps)(ListShoe);
