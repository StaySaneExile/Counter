import React from 'react';
import './Calc.css';

class ButtonInc extends React.Component {

    render = () => {
        let disable = this.props.count === this.props.maxValue;

        return (
                <button disabled={disable} onClick={this.props.addCount}
                        className="buttonInc">Inc
                </button>
        );
    }
}

export default ButtonInc;

