import React from "react";

class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    myChangeHadler = (event) => {
        console.log('value trong myChangeHadler', event.target.value);
        //console.log('myChangeHadler', event); //check console
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        
        let header = '';
        if(this.state.username)
            header = <h3>Hello {this.state.username}</h3>
        else 
            header = '';

        return(
            <form>
                <h2 style={{color:'lightblue'}}>Cách onChange hoạt động</h2>
                {header}
                <p>username: <input type="text" onChange={this.myChangeHadler}/></p>
            </form>
        )
    }
}

export default MyForm