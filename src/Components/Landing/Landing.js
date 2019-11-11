import React from 'react'
import './landing.css'

export default function Landing (){
    return(
        <div id='landing'>
            <div id="mobile-img-container">
                <img src="https://coventry-candles.s3.us-east-2.amazonaws.com/CANDLES.png" alt='bucket'/>
                <img src="https://coventry-candles.s3.us-east-2.amazonaws.com/SPOT+LIGHT+SCENT_.png" />
                <img src="https://coventry-candles.s3.us-east-2.amazonaws.com/S+E+E+W+H+A+T+'+S+N+E+W.png"/>
            </div>
            <div id="desktop-img-container">
                <img src="https://coventry-candles.s3.us-east-2.amazonaws.com/Last+Call!.png"/>
                <img src="https://coventry-candles.s3.us-east-2.amazonaws.com/S+P+O+T+L+I+G+H+T.png" />
            </div>
        </div>
    )
}