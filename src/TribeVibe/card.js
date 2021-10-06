import React from 'react';
import Css from './homepage.css'

const card =(props)=>{
    return(
        <div className="card">
            <div className="img1">
                <img style={{height: '67vh',width: '28rem',borderRadius: '4%'}} src={'https://atroposjs.com/images/header/atropos-bg.svg'}></img>
            </div>
            <div className="img2">
                <img style={{height: '67vh',width: '28rem',borderRadius: '4%'}} src={'https://atroposjs.com/images/header/atropos-mountains.svg'}></img>
            </div>
            <div className="img3">
                <img style={{height: '67vh',width: '28rem',borderRadius: '4%'}} src={'https://atroposjs.com/images/header/atropos-forest-back.svg'}></img>
            </div>
            <div className="img4">
                <img style={{height: '67vh',width: '28rem',borderRadius: '4%'}} src={'https://atroposjs.com/images/header/atropos-forest-mid.svg'}></img>
            </div>
            <div className="img5">
                <img style={{height: '67vh',width: '28rem',borderRadius: '4%'}} src={'https://atroposjs.com/images/header/atropos-forest-front.svg'}></img>
            </div>
           
             <div className="txt">
                 TRIBE VIBE
             </div>
             <button className="btnn">
                 Get Started
             </button>
        </div>
    );
}

export default card;