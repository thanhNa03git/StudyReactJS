import React from "react";
function Car(props) {
    return (

        <div style={{color: 'blue'}}>
        <h3>Ví dụ Props với functionComp, I am a {props.value}!</h3>
        </div>
    );
}

export default Car