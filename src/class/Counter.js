import React, {Component} from 'react';

class Counter extends Component {
    /**
     * Component 생성자 메서드
     * @param props
     */
    constructor(props) {
        super(props);
        // State 초깃값 설정
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    render() {
        const {number,fixedNumber} = this.state // state 조회할 경우, this.state
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixedNumber}</h2>
                <button
                    // onClick 통해 버튼이 클릭 되었을 때 호출할 함수를 지정
                    onClick={() => {
                        // this.setState()를 사용해 state 새로운 값을 넣을 수 있다.
                        // this.setState({number: number + 1});
                        this.setState(prevState => {
                            return {
                                number : prevState.number + 1
                            };
                        },() => {
                            console.log('방금 setState가 호출 되었습니다.');
                            console.log(this.state);
                        })
                    }}
                />
            </div>
        )
    }
}

export default Counter;