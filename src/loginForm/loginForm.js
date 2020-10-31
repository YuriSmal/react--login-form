import React from 'react'
import './loginForm.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email != '' && this.state.password != ''  ) {
            alert("Successfully loged in! (let's imagine we have backend)")
        } else {
            alert("Please enter correct data")
        }
    }

    render() {
        return (
            <div className='login-form-wrapper'>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                    <h3 className='login-heading'>Sign in to your account</h3>
                    <input className='login-form-input' 
                        onChange={this.handleEmailChange}
                        type='email' 
                        placeholder='Your email' 
                        value={this.state.email}>
                    </input>
                    <input className='login-form-input input-password' 
                        onChange={this.handlePasswordChange}
                        type='password' 
                        placeholder='Your password'
                        value={this.state.password}></input>
                    <div className='keep-signed'>
                        <input className='login-checkbox' type='checkbox' id='keepSignIn' name='keepSignIn'/>
                        <label for='keepSignIn'>Keep me signed in</label>
                    </div>
                    <button className='btn-sign-in' type='submit' >Sign in</button>
                    <p className='password-restore-wrapper'>
                        <a className='password-restore' href=''>Forgot your password?</a>
                    </p>
                    
                </form>
            </div>   
        )
    }
}

export default LoginForm;
