import React from "react";

// Ví dụ về getSnapShotBeforeUpdate()
class car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964,
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({color: "green"})
        }, 3000)
        console.log("đếm")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Trước khi Update, màu sắc đã là " +prevState.color;
        console.log("value trước cập nhật")
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "Bản cập nhật màu sắc là "+this.state.color;
        console.log("value đã cập nhật")
    }

    // changeColor = () => {
    //     this.setState({ color: "blue" });
    // };

    render() {
        console.log("render ")
        return (
        <div style={{backgroundColor: "none"}}>
            <h1 style={{color: "blueviolet"}}>Giai đoạn Update</h1>
            <h3>Màu tui thích là {this.state.color}</h3>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
        );
    }
}
export default car;
