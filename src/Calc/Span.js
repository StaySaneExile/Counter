import React from 'react';
import './Calc.css';

class Span extends React.Component {

    render = () => {
        let filterActive = this.props.count === this.props.maxValue ? "filterActive" :  "spanDef";
        return (

                <span className={filterActive} ref={this.props.span}>
                    {this.props.count}
                </span>


        );
    }
}

export default Span;

