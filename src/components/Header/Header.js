import React from 'react';
import  './Header.css';
import logo from '../../image/payment logo.jpg';
export default function Header(){
    return(
        <div className='header'>
            <div className='payment-header'>
                <img src={logo} alt=''/>
                <div className='header-text'>
                    <span id='first-line'>Paying to</span>
                    <span id='second-line'>Epoxys data labs</span>
                    {/* hello */}
                </div>
            </div>
        </div>
    );
}