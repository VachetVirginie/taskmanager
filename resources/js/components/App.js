import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <form>
                                    <div classname="form-group">
                                        <textarea className="form-control" rows="5" placeholder="test" required/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Create Task</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;