import React from "react";

function Car () {

// Adding event
    const run1 = () => {
        alert("Xe bat dau chay!")
        console.log("act: " +  this)
    }

// Passing parament
    const run2 = (mess) => {
        alert(mess)
        console.log("act: " + mess)
    }

// Event Object
    const act = (a,b) => {
        alert(b.type);
        console.log(a,b);
    }
    return(
        <>
            <div>
                <h1 style={{color:"blueviolet"}}>VD1: Start with first Events</h1>
                <h3>Click để xe bắt đầu chạy</h3>
                <button onClick={run1} 
                style={{backgroundColor:"yellow", cursor: "pointer"}}>
                    Run now
                </button>
            </div>
            <div>
                <h1 style={{color:"blueviolet"}}>VD2: truyền đối số vào function </h1>
                <h3>Click để xe bắt đầu chạy</h3>
                <button onClick={() =>  run2("grrr grrr")} 
                style={{backgroundColor:"yellow", cursor: "pointer"}}>
                    Run now
                </button>
            </div>
            <div>
            <h1 style={{color:"blueviolet"}}>VD3: Check con trỏ chuột  </h1>
            <h3>Click để kiểm tra</h3>
            <button onClick={(event) => act("checked", event)}>Check</button>
            </div>
        </>
    )
}

export default Car