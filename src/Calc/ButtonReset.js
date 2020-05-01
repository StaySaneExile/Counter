import React from 'react';
import './Calc.css';

class ButtonReset extends React.Component {
    render = () => {
        let disable = this.props.count === this.props.startValue
        return (
                < button disabled={disable}
                         onClick={this.props.unAddCount}
                         className="buttonReset">
                    Reset
                </button>
        );
    }
}

export default ButtonReset;

