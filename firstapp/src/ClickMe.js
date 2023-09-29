import React from "react";

// Thành phần con sử dụng phương thức function từ props
const ChildComponent = (props) => {
  return <button onClick={props.handleClick}>Click me</button>;
};

// Thành phần cha chứa phương thức function và truyền nó vào props của thành phần con
class ParentComponent extends React.Component {
  handleClick() {
    alert('Button clicked!')
  }

  render() {
    return (
      <div>
        <h3>Parent Component</h3>
        <ChildComponent handleClick={this.handleClick} />
      </div>
    );
  }
}
export default ParentComponent;
