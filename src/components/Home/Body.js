import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import  './Body.css';

class Body extends Component{
    constructor(){
        super();
        this.state={
            purpose:'instamo',
            amount:0
        }
    }

    // handler to check amount is more than Rs 9 or not 
    payHandler=()=>{
       let amount = document.getElementById('amount-input').value;
       let purpose = document.getElementById('purpose-input').value;
       this.setState({
           amount:amount,
       })
       if(purpose===''){
           this.setState({
               purpose:this.state.purpose
           })
       }
       else{
           this.setState({
               purpose:purpose
           })
       }
       if(amount<9)
       {
         let min = "<p id='min-amount'>Min amount should be Rs.9</p>";
         document.getElementById('min-cond').innerHTML=min;
       }
   
       if(amount>=9){
           document.getElementById('min-cond').style.display='none';
           localStorage.setItem('amount',amount)
           localStorage.setItem('purpose',purpose)
          return <Link to='your-details'/>
       }

    }
    
    render(){
    return(
        <div className='body'>
            <div id='purpose'><label>purpose of payment</label></div>
            <input id='purpose-input' type='text' value={this.state.purpose} onChange={(e)=>this.setState({purpose:e.target.value})}></input>
            <div id='amount'><label>Amount</label></div>
            <input id='amount-input' type='number'></input>
            <div id='min-cond'></div>
            
            <button onClick={this.payHandler}>pay</button>
            {
                this.state.amount>=9?
                <Redirect to={{
                    pathname: '/your-details',
                    state:{
                        name:this.state.purpose,
                        amount:this.state.amount
                    }
                  }}/>
                  :null
            }
          </div>
    );
    }
}
export default Body;