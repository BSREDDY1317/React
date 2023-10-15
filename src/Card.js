import React from 'react'
import './Card.css'
import bg from './imgs/Add a heading.jpg'
import clothbanner from './imgs/clothbanner.jpg'


const Card = (props) => {
  return (
    <div>
      


    <div className='row'>
    
  {props.data.map((product)=>{
      const {names,desc,price,img,id} = product;
    return(
        
        <div className='col-sm-3'key={id} style={{ marginTop: `${id *10}px` }}>
        <div className="card" style={{ width: "18rem" }}>
        <img src={img}className="card-img-top" alt="..." style={{height:'200px'}}/>
        <div className="card-body">
          <h5 className="card-title">{names}</h5>
          <p className="card-text">
           {desc}
          </p>
          <h5>{price}</h5>
          <button className="btn btn-primary" onClick={()=>props.handleCartData(product)}>
            Add Cart
          </button>
        
      </div>
      </div>
      </div>
    )
    })}
 </div>
    <div >
        <img   src={bg} alt='bg'  style={{height:'400px',width:'100%',marginTop:'15px'}}   />
    </div>
    <div >
        <img   src={clothbanner} alt='bg'  style={{height:'100px',width:'100%',marginTop:'15px'}}   />
    </div>

    <div  style={{backgroundColor:"rgb(165, 171, 164)", borderRadius:"30px"}}>
         
    <div className='row'>
    
    {props.cloth.map((product)=>{
        const {names,price,img,id} = product;
      return(
          
          <div className='col-sm-3'key={id} style={{ marginTop: `${id *10}px` }}>
          <div className="card" style={{ width: "18rem" }}>
          <img src={img}className="card-img-top" alt="..." style={{height:'200px'}}/>
          <div className="card-body">
            <h5 className="card-title">{names}</h5>
            
            <h5>{price}</h5>
            <button className="btn btn-primary" onClick={()=>props.handleCartData(product)}>
              Add Cart
            </button>
          
        </div>
        </div>
        </div>
      )
      })}
   </div>
    </div>


</div>
  )
}

export default Card;
