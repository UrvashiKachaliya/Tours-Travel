import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DEL } from '../Redux/Actions/action';








const ShoppingCart = () => {
  
  const getdata=useSelector((state)=>state.cartreducer.carts);
  console.log(getdata);

const dispatch=useDispatch();

const RemoveCart =(id)=>{
  dispatch(DEL(id))
}

return (
    <Container>
      <h2 className="my-4">Your Shopping Cart</h2>

      {getdata.length==0 ?"Your Shopping cart is empty":
      

      <Table striped bordered hover>
        <thead>
      
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {getdata.map((details) => (
          <tr>
            <td>
              <img src="/path/to/image" alt="Product" style={{ maxWidth: '100px' }} />
            </td>
            <td>{details.PackageName}</td>
            <td>{details.PackagePrice}$</td>
            <td>{details.PackageLocation}</td>
            <td>{details.PackageFetures}</td>
            <td>
              <Button variant="danger" onClick={()=>RemoveCart(details.PackageId)}>Remove</Button>
            </td>
          </tr>
       
          ))}
        </tbody>
      </Table>}
      
    </Container>
  );
};

export default ShoppingCart;
