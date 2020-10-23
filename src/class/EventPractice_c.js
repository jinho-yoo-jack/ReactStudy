import React, {Component} from 'react';

class EventPractice_c extends Component {
    state = {
        username: '',
        message: ''
    }

    // 초기화
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // Arrow Function
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state[e.target.name]);
    }

    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter')
            this.handleClick();
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="사용자명"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="아무거나 입력해 보세요."
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}
                />
                <button
                    onClick={this.handleClick}
                    >확인
                </button>
            </div>
        )
    }
}


export default EventPractice_c;
