import React from 'react';
import './App.css';
import './Calc.css';
import './Settings.css';
import Calc from "./Calc";
import Settings from "./Settings";

class App extends React.Component {

    state = {
        count: 0,
        maxValue: 0,
        startValue: 0
    }
    addCount = () => {
        this.setState(
            {count: this.state.count + 1});
    };
    unAddCount = () => {
        this.setState(
            {count: this.state.count = 0});
    };


    render = () => {
        return (
            <div >
                <div className="calc">
                    <Calc count={this.state.count}
                          addCount={this.addCount}
                          count={this.state.count}
                          unAddCount={this.unAddCount}/>
                </div>
                <div className='samurai'></div>
                <div className="settings">
                    <Settings />
                </div>
            </div>
        );
    }
}

export default App;

