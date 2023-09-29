import React from "react"
/*
    React có bốn method tích hợp được gọi theo thứ tự sau khi Mounting một Comp:
        1. constructor()
        2. getDerivedStateFromProps()
        3. render()
        4. componentDidMount()
    Phương thức render() là bắt buộc và sẽ luôn được gọi, 
    Các phương thức khác là tùy chọn và sẽ được gọi nếu muốn xác định chúng.
*/
// class component
class shape extends React.Component {
    /*
    Phương thức constructor() được React gọi mỗi khi tạo một comp:
    Khi constructor() được khởi tạo,đó là nơi thiết lập trạng thái ban đầu và các giá trị ban đầu.
    constructor() được gọi cùng với "props" làm đối số, và phải luôn bắt đầu bằng cách gọi super(props) trước bất kỳ thứ gì khác
    Điều này nhằm khởi tạo method xây dựng của lớp cha (superclass) và cho phép comp kế thừa các method từ superclass của nó (React.Component).
     */
    constructor(props) {
        super(props);
        this.state = {
            valueName: "hình vuông",
            colorName: props.nameColor,
            color: props.color
        };
        console.log('chạy đến constructor')
    }
    /*
    Phương thức getDerivedStateFromProps() được call TRƯỚC khi render một phần tử HTML được hiển thị
    Là nơi để đặt State Object dựa trên các Props ban đầu.
    Nó lấy State là đối số và return về object đã thay đổi trạng thái.
    Ví dụ value ban đầu có color: 'blue' nhưng getDerivedStateFromProps(props, state) đã update màu theo props (superclass) của nó.
     */
    static getDerivedStateFromProps(props, state) {
        console.log('chạy đến getDerivedStateFromProps')
        return {value: props.valueName };
    }
    /*
    Phương thức render() là bắt buộc và là phương thức chính để xuất HTML sang DOM.
     */
    render() {
        console.log('chạy đến render')
        return <h3 style={{color:this.state.color}}>Ví dụ về Mounting, tôi là {this.state.valueName} và tôi có màu {this.state.colorName}</h3>
    }
    /*
    Phương thức componentDidMount() được call SAU khi render một phần tử HTML được hiển thị
    Đây là nơi chạy các câu lệnh yêu cầu Comp đó đã được đặt trong DOM.
     */
    componentDidMount() {
        console.log('chạy đến componentDidMount')
        setTimeout(() => {
            this.setState({
                color: "red",
                colorName: "đỏ",
                valueName: "hình tam giác"
        })
        console.log('componentDidMount đã làm thay đổi')
        }, 3000)
    }
}

export default shape;