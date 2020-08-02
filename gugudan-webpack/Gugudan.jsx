const React = require('react');

const GuGuDan = () => {
    const [firstNumber, setFirstNumber] = React.useState(Math.ceil(Math.random() * 9));
    const [secondNumber, setSecondNumber] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const changeText = (e) => {
        setValue(e.target.value);
    }

    const submit = (e) => {//onSubmit 핸들링 콜백 함수
        e.preventDefault();
        if (firstNumber * secondNumber === parseInt(value)) {
            setFirstNumber(Math.ceil(Math.random() * 9));
            setSecondNumber(Math.ceil(Math.random() * 9));
            setValue('');
            setResult(value + ' 정답!');
        } else {
            setValue('');
            setResult(value + ' 땡!');
        }
        inputRef.current.focus();
        // this.input.focus();//커서를 인풋 엘리먼트로 설정
    }
    return (
        <>
            <h3>구구단 게임</h3>
            <div>{firstNumber}곱하기 {secondNumber}</div>
            <form onSubmit={submit}>
                <input type="number"
                       value={value}
                       ref={inputRef}
                       onChange={changeText}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = GuGuDan;