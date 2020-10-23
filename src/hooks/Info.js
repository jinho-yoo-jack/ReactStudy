import React, {useState, useEffect} from 'react';

const Info = () => {
    const [person, setPerson] = useState({
        name: '',
        nick: ''
    });


    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({person});
    })

    const handleOnChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleOnChange}
            />
            <input
                type="text"
                name="nick"
                value={person.nick}
                onChange={handleOnChange}
            />
            <p>이름:{person.name}</p>
            <p>닉네임:{person.nick}</p>
        </div>
    );

}


export default Info;
