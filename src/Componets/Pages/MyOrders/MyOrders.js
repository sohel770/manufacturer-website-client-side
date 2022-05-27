import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./MyOrders.css"


const MyOrders = () => {
    const [services,setServices]=useState([])
    const navigate = useNavigate()
const updateStock=(id)=>{
  navigate(`/service/${id}`)
}
    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const orderCancel=id=>{
        const proceed=window.confirm('Are you sure you want to delete?')
       if (proceed) {
         const url=`http://localhost:5000/order/${id}`;
        fetch(url,{
            method: 'DELETE'
        }) 
        .then(res => res.json())
        .then(data=>{
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
                const remainingProducts = services?.filter(
                  (service) => service?._id !== id
                );
                setServices(remainingProducts);
              }
        })    
       }
    }
    return (
        <>
               <div>
      <div className="py-5">
        <div className="container">
          <div>
          
           <div className="add">
           <Link to="/services"> <button  className="delivered_click">Add Products</button></Link>
           </div>
            <h2 className="heading">My Items</h2>
          </div>
          <div className="mx-auto">
            <Table striped bordered responsive hover>
              <thead>
                <tr>
                  <th style={{textAlign: 'center'}}>Product Id</th>
                  <th style={{textAlign: 'center'}}> Name</th>
                  <th style={{textAlign: 'center'}}>Price</th>
                  <th style={{textAlign: 'center'}}>Available Quantity</th>
                  <th style={{textAlign: 'center'}}>Minimum Quantity</th>
                  <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service._id}>
                    <td>{service?._id}</td>
                    <td>{service?.name}</td>
                    <td>{service?.price}</td>
                    <td>{service?.avQuantity}</td>
                    <td>{service?.minQuantity}</td>
                    <td>
                   <div className="d-flex">  
                    <button onClick={() =>updateStock(service?._id)} style={{margin:"15px",padding:"12px", backgroundColor:"green",borderRadius:"5px", color:"white", width:"50%"}}>Payment</button>
                      <button
                        onClick={() => orderCancel(service?._id)}
                        style={{margin:"15px",padding:"12px", backgroundColor:"red",borderRadius:"5px", color:"white", width:"50%"}} >Cancel</button></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
        </>

    );
};

export default MyOrders;