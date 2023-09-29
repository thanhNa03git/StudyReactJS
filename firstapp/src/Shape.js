import React from "react"

// class component
class shape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueName: props.value,
            colorName: props.nameColor,
            color: props.color
        };
    }
    render() {
        return <h3 style={{color:this.state.color}}>Ví dụ về State, tôi là {this.state.valueName} và tôi có màu {this.state.colorName}</h3>
    }
}

export default shape;