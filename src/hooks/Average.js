import React, {useState, useMemo, useCallback, useRef} from 'react';


const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = (parentProps) => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        console.log('Call onChange');
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        console.log('Call onInsert');
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    // 미리 저장 해놓은 값을 return(반환) 한다. 그러나, list 변화가 있을 때는 다시 콜백함수를 호출하여
    // 반환 값을 갱신한다.
    // const avg = useMemo(() => getAverage(list), [list]);
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input
                value={number}
                onChange={onChange}
                ref={inputEl}
            />
            <button
                onClick={onInsert}
            >등록
            </button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값:</b>{avg}
            </div>
        </div>

    );

}

export default Average;