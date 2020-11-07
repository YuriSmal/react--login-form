import React from 'react'
import './loginForm.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email && this.state.password && this.state.email !== '' && this.state.password !== ''  ) {
            alert("Successfully loged in! (let's imagine we have backend)");
            console.log(this.state);
        } else {
            alert("Please enter correct data")
        }
    }

    render() {
        return (
            <div className='login-form-wrapper'>
            <p className='form-tip-top'>Прогортай вниз, щоб побачити варіант з Formik</p>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                    <h3 className='login-heading'>Sign in to your account (No Formik)</h3>
                    <input className='login-form-input' 
                        onChange={this.handleInputChange}
                        name='email'
                        type='email' 
                        placeholder='Your email' 
                        value={this.state.email}>
                    </input>
                    <input className='login-form-input input-password' 
                        onChange={this.handleInputChange}
                        name='password'
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
