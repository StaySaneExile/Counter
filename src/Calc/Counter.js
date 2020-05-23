import React from 'react';
import './Calc.css';
import ButtonInc from "./ButtonInc";
import Span from "./Span";
import ButtonReset from "./ButtonReset";

class Counter extends React.Component {

    render = () => {
        return (
            <div >
                <div className='span'>
                    <Span maxValue={this.props.maxValue}
                          startValue={this.props.startValue}
                          count={this.props.count}/>
                </div>
                <div className='buttons'>
                    <ButtonInc count={this.props.count}
                               addCount={this.props.addCount}
                               maxValue={this.props.maxValue}/>

                    <ButtonReset count={this.props.count}
                                 unAddCount={this.props.unAddCount}
                                 startValue={this.props.startValue}/>
                </div>
            </div>

        );
    }
}

export default Counter;

