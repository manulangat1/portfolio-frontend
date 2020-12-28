import React from 'react';
import {connect } from 'react-redux';
import {Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth';

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { email , password} = this.state
        console.log(email,password)
        const newUser = {
            email,password
        }
        this.props.loginUser(newUser)
    }
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/admin/" />
        }
        const { email , password} = this.state
        return(
            <section id="login">
                <div className="container">
                    <div className="form">
                        <h1>Admin Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="email" className="form-control" value={email} name="email" placeholder="Enter your email" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} name="password" placeholder="Enter your password" onChange={this.onChange} />
                    </div>
                    <input type="submit" value="login" className="primary-btn" />
                </form>
                </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{loginUser})(Login)