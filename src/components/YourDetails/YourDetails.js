import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import  './YourDetails.css';

class YourDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'instamo',
            amount:0,
            nextModule:false
        }
    }

    submitHandler=()=>{
        let name=document.getElementById('name-input').value;
        let email=document.getElementById('email-input').value;
        let mobile=document.getElementById('phone').value;
        console.log(name)
        if(name===""){
           document.getElementById('name1').innerHTML="<p>Enter your name</p>";
        }else{
            document.getElementById('name1').style.display='none';
        }
        if(!email.endsWith('@gmail.com')){
            document.getElementById('email1').innerHTML="<p>Enter a valid email ID</p>";
         }else{
            document.getElementById('email1').style.display='none';
        }
         if(mobile.toString().length!==10){
            document.getElementById('mobile1').innerHTML="<p>Enter a valid mobile number</p>";
            // console.log(mobile.toString().length)
        }
        else{
            document.getElementById('mobile1').style.display='none';
        }
        if(name!=='' && email.endsWith('@gmail.com') && mobile.toString().length===10)
        {
            this.setState({
                nextModule:true
            })
        }
console.log(localStorage)
        // alert("clicked")
    }
    render(){
    return(
        <div className='YourDetails'>
                <div id='purpose'><label>purpose of payment</label></div>
                <Link to='/' id='change'>Change</Link>
                <div id='purpose-name'>{this.props.location.state.name}</div>
                <div id='space-btw'>
                    <div id='amount'>Amount</div>
                    <div id='amount'> &#x20B9;{this.props.location.state.amount}</div>
                </div>
                <div id='your-details'>Your Details<div id='symbol'>&#8250;</div><div id='payment'>Payment</div></div>
                <div id='name'>Name</div>
                <input id='name-input' type='text' required></input>
                <div id='name1'></div>
                <div id='email'>Email</div>
                <input id='email-input' type='emaial'></input>
                <div id='email1'></div>
                <div id='mobile'>Phone Number</div>
                <input type="number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <div id='mobile1'></div>
                <div id='space-btw'>
                    <div id='amount'>Amount</div>
                    <div id='amount'> &#x20B9;{this.props.location.state.amount}</div>
                </div> 
                <input id='button' onClick={this.submitHandler} type='submit' value='Next'/>
                {
                    this.state.nextModule?
                    <Redirect to={{
                        pathname: '/payment',
                        state:{
                            name:this.props.location.state.name,
                            amount:this.props.location.state.amount
                        }
                      }}/>
                      :null
                }
            
        </div>
    );
    }
}
export default YourDetails;