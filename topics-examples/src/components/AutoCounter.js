import React from 'react';

export class AutoCounter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            'count': 0
        }
        this.startCount = this.startCount.bind(this);
    }

    startCount(){
        let count = this.state.count;

        console.dir(this.state);

        setInterval( ()=>{
            console.log(`count: ${count}`);
            this.setState( (prevState,prevProps)=>{
                return {'count': prevState.count + 1}
            } );
        }, 1000);

    }

    shouldComponentUpdate(){
        console.log('====================================');
        console.log(`shouldComponentUpdate fired`);
        console.log('====================================');

        return false;
    }

    render(){
        console.log('====================================');
        console.log(`render is fired`);
        console.log('====================================');
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.startCount}>start</button>
            </div>
        )

    }


}
