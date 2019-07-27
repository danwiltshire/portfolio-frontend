import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test'
import './index.css';

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

const BBC = (
    <div>Hello</div>
)

// JavaScript standard functional
function App() {
    return <BBC />;
}

ReactDOM.render(<App />, document.getElementById('app'))