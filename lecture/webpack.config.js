const path = require('path');

module.exports = {
    name : 'wordrelay-setting', //웹팩 이
    mode : 'development', //실서비스는 production름
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.jsx']
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
        app : ['./client']
    }, //입력
    output : {
        path : path.join(__dirname,'dist'),
        filename : 'app.js'
    }, //출력

};