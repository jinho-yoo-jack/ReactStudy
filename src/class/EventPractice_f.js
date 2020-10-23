import React, {useState} from 'react';


const EventPractice_f = (props) => {
    const [person, setPerson] = useState({
        username: '',
        message: ''
    });

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    };

    const handleClick = () => {
        alert(person.username);
        setPerson({
            ...person,
            username: '',
            message: ''
        });
    }

    const handleKeyPress = (e) => {
       if(e.key === 'Enter') handleClick();
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                value={person.username}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleClick}>확인</button>
        </div>
    )


}


export default EventPractice_f;