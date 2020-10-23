import React, {useState, useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            console.log('1. 현재 state 정보 : ', state);
            return {...state, level: state.level + 1};
        case 'DECREMENT' :
            console.log('2. 현재 state 정보 : ', state);
            return {...state, level: state.level - 1};
        default :
            return state;
    }

}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {userid: '', level: 0});


    return (
        <div>
            <p>{state.userid}님의 현재 레벨은 <b>{state.level}</b></p>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
}

export default Counter;