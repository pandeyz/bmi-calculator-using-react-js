import React, {Component} from 'react';

class ResultComponent extends Component {
    
    render() {
        let {result, resultMsg} = this.props;

        return (
            <div>
                <span>{result}</span>
                <p>{resultMsg}</p>
            </div>
            )
        ;
    }
}

export default ResultComponent;
