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
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 5% in KR','last 2 chrome versions'],
                            },
                            debug: true,
                        }],
                        '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ],
                    cacheDirectory: true,
                },//options end
            },
        ],
    },

    entry : {
        app : ['./client'] //client.jsx에서 불러오는 모듈은 안적어줘도 자동으로 같이 패킹함
    }, //입력 파일 설정
    output : {
        path : path.join(__dirname,'dist'), //현재디렉토리 + dist
        filename : 'app.js',
        // webpack-dev-server 사용 시 <script src="./dist/app.js"></script> /dist 경로 추가
        // 추가 없을 시에 html 에서 <script src="./dist/app.js"></script> 가 아닌 <script src="./app.js"></script> 로 해줘야 동작
        publicPath: '/dist/'
    }, //출력 파일 설정

};