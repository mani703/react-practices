## CLI 사용법
1. 설치
   ```bash
   $ npm i -D @babel/core @babel/cli
   ```

2. 소스 파일 작성(ES6)

3. 변환하기
```bash
$ npx babel src -d dist
Successfully compiled 1 file with Babel (290ms).
```

## 코어 라이브러리 설치
```bash
$ npm i -D @babel/core
```

## 코어 라이브러리 사용해보기
```javascript
const babel = require('@babel/core');
const result = babel.transform("const fn = () => 1;", {});

console.log(result);
```