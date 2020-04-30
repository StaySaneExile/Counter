import React from 'react';
import './Calc.css';
import Button1 from "./Button1";
import Span from "./Span";
import Button2 from "./Button2";

class Calc extends React.Component {

    render = () => {
        return (
            <div className='main'>
                <Button1 count={this.props.count} addCount={this.props.addCount} />
                <div className="span-main">
                    <Span count={this.props.count} />
                </div>
                <Button2 count={this.props.count} unAddCount={this.props.unAddCount}/>
            </div>

        );
    }
}

export default Calc;

