const React = require('react');
const ReactDom = require('react-dom');

class WordRelay extends React.Component {
    state = {
        word: '국물',
        value: '',
        result: ''
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length -1] === this.state.value[0]) { //right
            this.setState({
                word: this.state.value,
                value: '',
                result: '정답입니다.'
            });
        }
        else { //failed
            this.setState({
                value: '',
                result: '틀렸습니다.'
            });
        }
        this.input.focus(); //커서는 항상 input박스로!
    }

    input;
    onRefInput = (c) => {
        this.input = c;
    }

    onChangeInput = (e) => { //text박스에 입력 이벤트가 발생할때마다 value를 새로 렌더링
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>클릭</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

const { hot } = require('react-hot-loader/root');
const Hot = hot(WordRelay);
module.exports = Hot;