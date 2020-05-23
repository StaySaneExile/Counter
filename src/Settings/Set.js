import React from 'react';
import './Set.css';


class Set extends React.Component {

    render = () => {
        let disable = this.props.startValue < 0 || this.props.startValue >= this.props.maxValue
        return (
            <div >
                <button disabled={disable}
                        onClick={this.props.setValue}
                        className='setButton'>set</button>
            </div>

        );
    }
}

export default Set;

