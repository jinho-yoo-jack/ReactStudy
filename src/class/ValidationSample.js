import React, {Component, createRef} from "react";
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    };

    passwordInput = createRef();

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.passwordInput.current.focus();
    };


    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    ref={this.passwordInput}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}


export default ValidationSample;