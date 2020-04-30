import React from 'react';
import './App.css';

class Button1 extends React.Component {

    render = () => {
        let disable = this.props.count === 5;

        return (
            <div >
                <button disabled={disable} onClick={this.props.addCount}
                        className="button1">Inc
                </button>
            </div>

        );
    }
}

export default Button1;

