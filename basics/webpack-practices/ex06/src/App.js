  import '.App.scss';

const App = function(){
    const app = document.createElement('h1');
    app.className = 'App';
    app.innerHTML = 
    '<header class="App-header">' + 
  
    '</header>';
    return app;
}

export { App };