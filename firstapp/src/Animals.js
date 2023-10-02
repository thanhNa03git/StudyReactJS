import React from "react"

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true}
    }
    
    // method delete
    delAnimal = () => {
        this.setState({show: false});
    }

    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Animals />;
        };
        return(
            <div>
                <h1 style={{color: "blueviolet"}}>Giai đoạn Unmounting</h1>
                {myheader}
                <button type="button" onClick={this.delAnimal}>Delete Animals</button>
            </div>
        );
    }
}

class Animals extends React.Component {
    componentWillUnmount() {
        alert("thành phần Animals sắp được unmounting");
    }
    render(){
        return(
            <h3>The zoo for Animals</h3>
        )
    }
}

export default Container