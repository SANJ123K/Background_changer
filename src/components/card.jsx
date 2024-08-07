import { useState } from "react"
function Card()
{
    let [clr, setclr] = useState("olive")
    return (
        <div style = {{display:"flex", height:"100vh", width:"100%", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", backgroundColor:clr}}>
          <div style = {{display:"flex", height:"40px", width:"700px", border:"2px solid black", justifyContent:"space-around", borderRadius:"5px", alignItems:"center"}}>
            {/* <Buttons btn = "Red"/>
            <Buttons btn = "Green"/>
            <Buttons btn = "Blue"/>
            <Buttons btn = "Olive"/>
            <Buttons btn = "Gray"/>
            <Buttons btn = "Yellow"/>
            <Buttons btn = "Pink"/>
            <Buttons btn = "Purple"/>
            <Buttons btn = "White"/>
            <Buttons btn = "Black"/> */}

            <button onClick = {() => setclr("red")}  style = {{height:"30px",       width:"60px", border:"2px solid black", backgroundColor:"red", color:"white", borderRadius:"5px"}}>red</button>
            <button onClick = {() => setclr("blue")}  style = {{height:"30px",      width:"60px", border:"2px solid black", backgroundColor:"blue", color:"white", borderRadius:"5px"}}>blue</button>
            <button onClick = {() => setclr("orange")}  style = {{height:"30px",    width:"60px", border:"2px solid black", backgroundColor:"orange", color:"white", borderRadius:"5px"}}>orange</button>
            <button onClick = {() => setclr("yellow")}  style = {{height:"30px",    width:"60px", border:"2px solid black", backgroundColor:"yellow", color:"white", borderRadius:"5px"}}>yellow</button>
            <button onClick = {() => setclr("black")}  style = {{height:"30px",     width:"60px", border:"2px solid black", backgroundColor:"black", color:"white", borderRadius:"5px"}}>black</button>
            <button onClick = {() => setclr("pink")}  style = {{height:"30px",      width:"60px", border:"2px solid black", backgroundColor:"pink", color:"white", borderRadius:"5px"}}>pink</button>
            <button onClick = {() => setclr("purple")}  style = {{height:"30px",    width:"60px", border:"2px solid black", backgroundColor:"purple", color:"white", borderRadius:"5px"}}>purple</button>
            <button onClick = {() => setclr("skyblue")}  style = {{height:"30px",   width:"60px", border:"2px solid black", backgroundColor:"skyblue", color:"white", borderRadius:"5px"}}>skyblue</button>
          </div>        
        </div>
    )
}
export default Card