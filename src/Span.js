import React from 'react';
import './App.css';

class Span extends React.Component {

    render = () => {
        let filterActive = this.props.count === 5 ? "filterActive" :  "";
        return (
            <div >
                <span className={filterActive} ref={this.props.span}>
                    {this.props.count}
                </span>
            </div>

        );
    }
}

export default Span;

