import React from 'react';
import './Calc.css';

class Input extends React.Component {

    render = () => {
        return (
                <input onChange={this.props.onChange}
                       className={this.props.className}
                       type={this.props.type}
                       value={this.props.value}/>
        );
    }
}

export default Input;

