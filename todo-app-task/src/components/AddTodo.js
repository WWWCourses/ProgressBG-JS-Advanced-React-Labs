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
                    onCh
                    ={this.changeHandler}
                /></label>


                <button onClick={this.clickHandler}>Add</button>
            </form>
        );
    }
}

export default AddTodo;