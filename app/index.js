import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BigKahunaBurger from './components/BigKahunaBurger'

// ES6 class component
/* class App extends React.Component{
    render(){
        return(
            <div>
                <p>Hello World</p>
                <Test />
            </div>
            
        )
    }
} */

/* const BBC = () => (
    <div>Hello</div>
) */

// JavaScript standard functional
function App() {
    return <BigKahunaBurger />;
}

ReactDOM.render(<App />, document.getElementById('app'))