import React, {useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [person, setPerson] = useState({
        name : '',
        nick : ''
    });

    const handleOnChange = (e) => {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        });
        console.log(person);
    }


    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b></p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
            <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleOnChange}
                />
        </div>
    );
}

export default Counter;