import React from 'react';
import Path from './path';
import TimelineCard from './timlineCard';
const timeLine =(props)=>{
    return(
        <div className="timeline">

        
        <div className="imgs">
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve1.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve1.png")}/>
        </div>
        <div className="imgs">
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve1.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{padding:'4%',width:'45vh',height:'20vh'}}src={require("../Assets/Eve2.png")}/>
        </div>
        <div className="imgs">
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve3.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve3.png")}/>
        </div>
        <div className="imgs">
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve4.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{padding:'4%',width:'45vh',height:'20vh'}}src={require("../Assets/Eve4.png")}/>
        </div>
        <div className="imgs">
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve5.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve5.png")}/>
        </div>
        {/* <h1>Day 2</h1> */}
        <div className="imgs">
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve7.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{visibility:'hidden',padding:'4%',width:'45vh',height:'20vh'}}src={require("../Assets/Eve7.png")}/>
        </div>
        <div className="imgs">
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve7.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve7.png")}/>
        </div>
        <div className="imgs">
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve8.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{visibility:'hidden',padding:'4%',width:'45vh',height:'20vh'}}src={require("../Assets/Eve8.png")}/>
        </div>
        <div className="imgs">
            <img style={{padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve9.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve9.png")}/>
        </div>
        <div className="imgs">
            <img style={{visibility:'hidden',padding:'4%',width:'50vh',height:'20vh'}}src={require("../Assets/Eve10.png")}/>
            <img style={{width:'6vh',height:'35vh'}}src={require("../Assets/Node.png")}/>
            <img style={{padding:'4%',width:'45vh',height:'20vh'}}src={require("../Assets/Eve10.png")}/>
        </div>
        </div>
        
    );
}

export default timeLine;