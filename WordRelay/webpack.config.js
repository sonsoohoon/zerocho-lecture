const path = require('path');

module.exports = {
    name : 'wordrelay-setting', //웹팩 이름
    mode : 'development', //실서비스는 production
    devtool : 'eval',
    resolve : { //확장자를 생략하기 위한 설정
        extensions : ['.js', '.jsx'] //여기에 확장자를 적어줌
    },

    module : {
        rules : [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            },
        ],
    },

    entry : {
        app : ['./client'] //client.jsx에서 불러오는 모듈은 안적어줘도 자동으로 같이 패킹함
    }, //입력 파일 설정
    output : {
        path : path.join(__dirname,'dist'), //현재디렉토리 + dist
        filename : 'app.js'
    }, //출력 파일 설정

};