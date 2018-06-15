import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import App from './App';
import axios from 'axios';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    ComponentDidMount() {
        let url = 'http://localhost/projects/LaravelReactJsSample/public/api/users/'+this.props.match.params.id + '/edit';
        axios.get(url)
            .then(response => {
                this.setState(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    handleChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let url = 'http://localhost/projects/LaravelReactJsSample/public/api/users/'+ this.props.match.params.id;
        const data = {
            name : this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.patch(url,data)
            .then(response => {
                this.props.history.push('/users')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return(
            <App>
            <h1>Create User</h1>
            <form onSubmit = {this.handleSubmit}>
             <div className="from-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChangeName} required/>
            </div>
            <div className="from-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChangeEmail} required/>
            </div>
            <div className="from-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChangePassword} required/>
            </div>
            <button className = "btn btn-primary" type="submit">Add User</button>
            </form>
            </App>
        );
    }
}
export default EditUser