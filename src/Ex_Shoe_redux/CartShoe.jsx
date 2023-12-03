import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE, GIAM, TANG, ADD } from "./reducer/constant";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";

class CartShoe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: true,
      viewItem: undefined,
    };
  }

  handleOpenView = (itemID) => {
    const viewItem = this.props.cart.find((item) => item.id === itemID);
    this.setState({
      openModal: true,
      viewItem: viewItem,
    });
  };

  handleCloseView = () => {
    this.setState({
      openModal: false,
      viewItem: undefined,
    });
  };

  render() {
    return (
      <>
        <div className="col-6 ">
          <div className="table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Price</th>
                <th>Img</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <img width={70} src={item.image} alt="" />
                    </td>
                    <td>
                      <strong>
                        <button onClick={() => this.props.handleGiam(item)}>-</button>
                        {item.soLuong}
                        <button onClick={() => this.props.handleTang(item)}>
                          +
                        </button>
                      </strong>
                    </td>
                    <td>
                      <button
                        onClick={() => this.props.handleDelete(item.id)}
                        className="btn btn-danger"
                      >
                        DELETE
                      </button>
                      <button
                        onClick={() => this.handleOpenView(item.id)}
                        className="btn btn-danger"
                      >
                        VIEW
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
        {this.state.viewItem && (
          <Modal show={this.state.openModal} onHide={this.handleCloseView}>
            <Modal.Header closeButton>
              <Modal.Title>THÔNG TIN SẢN PHẨM</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div>{this.state.viewItem.id}</div>
              <div>{this.state.viewItem.name}</div>
              <div>{this.state.viewItem.price}</div>
              <div>{this.state.viewItem.soLuong}</div>
              <img width={70} src={this.state.viewItem.image}></img>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseView}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleCloseView}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}
let mapStayToProps = (state) => {
  return {
    cart: state.cart,
  };
};
let mapDispatchProps = (dispatch) => {
  return {
    handleDelete: (idShoe) => {
      let action = {
        type: DELETE,
        payload: idShoe,
      };
      dispatch(action);
    },

    handleTang: (shoe) => {
      let action = {
        type: ADD,
        payload: shoe,
      };
      dispatch(action);
    },
    handleGiam: (shoe) => {
      let action = {
        type: GIAM,
        payload: shoe,
      };
      dispatch(action);
    },
    // handleGiam : ()=> {
    //     let action ={
    //         type : GIAM,
    //         payload : 1,
    //     };
    //     dispatch(action)

    // }
  };
};

export default connect(mapStayToProps, mapDispatchProps)(CartShoe);
