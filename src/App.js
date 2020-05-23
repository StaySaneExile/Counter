import React from 'react';
import './App.css';
import './Calc/Calc.css';
import Settings from "./Settings/Settings";
import Counter from "./Calc/Counter";

class App extends React.Component {

    state = {
        count: 0,
        maxValue: 0,
        startValue: 0
    }

    componentDidMount() {
        let counterStateAsString = localStorage.getItem('counter-state')
        let newState = JSON.parse(counterStateAsString)
        this.setState(newState)
    }

    saveState = () => {
        let value = JSON.stringify(this.state)
        localStorage.setItem('counter-state', value)
    }
    addCount = () => {
        this.setState(
            {count: this.state.count + 1});
    };
    unAddCount = () => {
        this.setState(
            {count: this.state.startValue});
    };
    setNewMaxValue = (newMaxValue) => {
        if (newMaxValue < 0 ||
            newMaxValue === this.state.startValue ||
            newMaxValue < 0 ||
            newMaxValue < this.state.startValue) {
            this.setState({
                maxValue: Number(newMaxValue),
                count: 'Incorrect value'})
        } else {
            this.setState({
                maxValue: Number(newMaxValue),
                count: 'press Set'})
        }
    };

    setNewStartValue = (newStartValue) => {
        if(newStartValue >= this.state.maxValue ||
            newStartValue < 0) {
        this.setState({
            startValue: Number(newStartValue),
            count: 'Incorrect value'})
        } else {
            this.setState( {
                startValue: Number(newStartValue),
                count: 'press Set'})
        }
    }
    setValue = () => {
        this.setState(
            {count: this.state.startValue}, () => {
                this.saveState()
            }
        )
    }


    render = () => {
        return (
            <div>
                <div className="calc">
                    <Counter count={this.state.count}
                             maxValue={this.state.maxValue}
                             startValue={this.state.startValue}
                             addCount={this.addCount}
                             unAddCount={this.unAddCount}/>
                </div>
                <div className="settings">
                    <Settings setNewMaxValue={this.setNewMaxValue}
                              setNewStartValue={this.setNewStartValue}
                              setValue={this.setValue}
                              maxValue={this.state.maxValue}
                              startValue={this.state.startValue}
                              count={this.state.count}/>
                </div>
                <div className='samurai'/>
            </div>
        );
    }
}

export default App;

