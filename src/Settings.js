import React from 'react';
import './Settings.css';
import Set from "./Set";

class Settings extends React.Component {

    render = () => {

        return (
            <div className='main'>
                <div className='max'>Max value</div>
                <div className='start'>Start value</div>
                <input className='input1' type='number'/>
                <input className='input2' type='number'/>
                <Set />

            </div>

        );
    }
}

export default Settings;

