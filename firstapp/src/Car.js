import React from "react";
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964,
        };
    }
    changeColor = () => {
        this.setState({ color: "blue" });
    };
    render() {
        return (
        <div style={{backgroundColor: "gray"}}>
            <p>Ví dụ về đổi value trong state object</p>
            <h1>Chiếc {this.state.brand} của tui</h1>
            <p style={{color: this.state.color}}>
            Đây là một chiếc {this.state.color} {this.state.model} đến từ {this.state.year}.
            </p>
            <button type="button" onClick={this.changeColor}>
            Change color
            </button>
        </div>
        );
    }
}
export default Car;
