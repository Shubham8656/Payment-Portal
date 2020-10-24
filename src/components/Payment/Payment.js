import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './Payment.css';
import bhim from '../../image/bhim.jpg';
import gpay from '../../image/gpay.png';
import paytm from '../../image/paytm.jpg';

class Payment extends Component{
    
    submitHandler=()=>{
        alert('Payment process successful')
    }
    render(){
    return(
        <div className='YourDetails'>
                <div id='purpose'><label>purpose of payment</label></div>
                <Link to='/' id='change'>Change</Link>
                <div id='purpose-name'>{localStorage.purpose}</div>
                <div id='space-btw'>
                    <div id='amount'>Amount</div>
                    <div id='amount'> &#x20B9;{localStorage.amount}</div>
                </div>
                <div id='con-fee'>
                    <div id='fee'>&#8250; Convenience fee</div>
                    <div>&#x20B9;{localStorage.amount*0.4}</div>
                </div>



                <div id='con-fee'>
                    <div id='amount'>Total</div>
                    <div id='amount'> &#x20B9;{localStorage.amount*1.4}</div>
                </div>
                <div id='your-details'>Your Details<div id='symbol'>&#8250;</div><div id='payment'>Payment</div></div>
                <div id='name'>select a payment method</div>
                <button id='pay'>
                    <img id='image'src={bhim} alt=''/>  
                    <img id='image' src={gpay} alt=''/> 
                    <img id='image' src={bhim} alt=''/> 
                    <img id='image' src={paytm} alt=''/>
                </button>
                <button id='pay'>Credit / Debit Cart</button>
                <button id='pay'>Net banking</button>
                <button id='pay'>Wallet</button>
                <button id='pay'>Pay Later</button>

                <input id='button' onClick={this.submitHandler} type='submit' value='Next'/>
                {console.log(this.props)}                 
        </div>
    );
    }
}
export default Payment;