import React, { useState } from 'react'

  

const Cart = (props) => {
   console.log(props)
   var total = 0;

   const[count, setCount] = useState(1);

   const countHandler = () => {
    setCount(count+1)
}

const countLessHandler = () => {
    setCount(count-1)
}


   props.data.map((product)=>{
    return(
        total= total + product.data.price
    
    )
   })
  return (
    <div className='row'>
      {/* {props.data.map((cartItem)=>{
         
        return(
            <div className='col-sm-4'key={cartItem.data.id}>
        <div className="card" style={{ width: "18rem" }}>
        <img src={cartItem.data.img}className="card-img-top" alt="..." style={{height:'200px'}}/>
        <div className="card-body">
          <h5 className="card-title">{cartItem.data.names}</h5>
          <p className="card-text">
           {cartItem.data.desc}
          </p>
          <h5>{cartItem.data.price}</h5>
          
        </div>
      </div>
      </div>
        )
      })} */}

      {/* <h5 style={{color:"red"}}>Total Cost Of Items:{total}</h5> */}
         <center>
        <table style={{width:"60%",border:"2px solid black", marginTop:"15px"}}>
            <thead>
                <tr style={{border:"2px solid black",backgroundColor:"orangered"}}>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {props.data.map((cartItem)=>{
                return(
                <tbody>
                    <tr style={{border:"1px solid black"}}>
                        <td><img src={cartItem.data.img} alt={`Image of ${cartItem.data.name}`} style={{height:"50px"}} /></td>
                        <td><h6>{cartItem.data.names}</h6></td>
                        <td><h5>{cartItem.data.price}</h5></td>
                    </tr>
                    
                </tbody>
           ) })}
           
            <tfoot>
                <tr style={{border:"2px solid black" ,color:"rgb(255,255,255)", fontWeight:"bold",backgroundColor:"orangered"}}>
                    <td>Total</td>
                    <td></td>
                    <td><h4>{total}</h4></td>
                </tr>
            </tfoot>
        </table>
        </center>
    </div>
  )
}

export default Cart
