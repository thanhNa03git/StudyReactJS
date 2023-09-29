import React from "react"

// class component
class shape extends React.Component {
    render() {
        return <h3 style={{color:this.props.color}}>Ví dụ Props với classComp, tôi là {this.props.value}</h3>
    }
}

export default shape;