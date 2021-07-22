## webpack-practice: ex07
1. 간단한 webpack loader 작성하고 설정해보기(src/text-loader.js)

2. 프로젝트 디렉토리
    <pre>
    /ex07
      ├--- package-lock.json
      ├--- package.json
      ├--- node-modules.json
      ├--- public
      |      ├--- index.html  
      |      └--- bundle.js   [build 결과]
      ├---  src
      |      ├--- text-loader.js
      |      ├--- hello.txt
      |      ├--- index.js
      |      └--- App.js
      └--- webpack.config.js   [webpack 설정 파일]
    <pre>

3. webpack.config.js
```json
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.txt$/i,
            loader: path.resolve('src/text-loader.js')
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
```

4. 빌드하기(image 복사를 위해서 먼저 꼭 해야함)
```bash
$ npx webpack 
```

5. test server 실행
```bash
$ npx webpack serve --progress
```



