import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'inputTitle': '',
            'inputId': 4 // just for demo - setting some deafult value
         };


         this.clickHandler = this.clickHandler.bind(this);
         this.changeHandler = this.changeHandler.bind(this);
    }

    clickHandler(e){
        // add input.value as newTodo.title to App.state.todos
        console.log('====================================');
        console.log();
        console.log('====================================');
        e.preventDefault();
    }

    changeHandler(e){
        // set state
        this.setState({'inputTitle':e.target.value });
        this.props.addTodo(this.state.inputTitle);
    }



    render() {
        return (
            <form>
                <label>Title<input type="text"
                    value={this.state.inputTitle}
                    onChange={this.changeHandler}
                /></label>
                <label> ID: <input type="number" value={this.state.inputId}/></label>
                <button onClick={this.clickHandler}>Add</button>
            </form>
        );
    }
}

export default AddTodo;