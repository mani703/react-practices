import './assets/css/App.css';

const App = function(){
    const app = document.createElement('h1');
    app.ClassName = 'Header';
    app.textContent = 'Hello World2';
    return app;
}

export { App };