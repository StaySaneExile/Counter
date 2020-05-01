import React from 'react';
import './Set.css';
import Set from "./../Settings/Set";
class Settings extends React.Component {

    changeMaxValue = (e) => {
        this.props.setNewMaxValue(e.currentTarget.value)
    }
    changeStartValue = (e) => {
        this.props.setNewStartValue(e.currentTarget.value)
    }

    render = () => {
        let startFilter = this.props.startValue < 0 ? 'inputStartErr' :
            this.props.maxValue <= this.props.startValue ? 'inputStartErr' : 'inputStart';

        let maxFilter = this.props.maxValue <= this.props.startValue ? 'inputMaxErr' : 'inputMax';


        return (
            <div className='main'>
                <div className='max'>Max value</div>
                <div className='start'>Start value</div>
                <input onChange={this.changeMaxValue}
                       className={maxFilter}
                       value={this.props.maxValue}
                       type='number'/>
                <input onChange={this.changeStartValue}
                       value={this.props.startValue}
                       className={startFilter}
                       type='number'/>
                <Set setValue={this.props.setValue}
                     startValue={this.props.startValue}
                     maxValue={this.props.maxValue}/>

            </div>

        );
    }
}

export default Settings;

