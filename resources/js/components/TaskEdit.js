import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskEdit extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
            task: []
        };
    //bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    //handle change
    handleChange(e){
        // console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    }

   // handle submit
    handleSubmit(e) {
        e.preventDefault();
        axios
        //bug adresse
            .post('./tasks', {
                name: this.state.name
            })
            .then(response => {
                // console.log('from handle submit', response);
                this.setState({
                    tasks: [response.data, ...this.state.tasks],
                    name: ''
                });
            });
    }

//get all tasks to backend


getTasks() {
    axios.get(`./tasks/${this.props.match.params.id}/edit`).then(response =>
        this.setState({
            task: response.data.task,
            name: response.data.task.name
        })
    );
}


// lifecycle method
componentWillMount(){
    this.getTasks();
}


    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Examplesssss Componentdqsdsd</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea 
                                        onChange={this.handleChange}
                                        value= {this.state.name}
                                        className="form-control"
                                        rows="5" 
                                        placeholder="test" 
                                        maxLength='255'
                                        required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Task</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default TaskEdit;
