import React from 'react';
import './App.css';

class Button2 extends React.Component {
    render = () => {
        let disable = this.props.count === 0;
        return (
            <div >
                < button disabled={disable}
                         onClick={this.props.unAddCount}
                         className="button2">
                    Reset
                </button>
            </div>

        );
    }
}

export default Button2;

