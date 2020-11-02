import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';


class LoginFormFormik extends React.Component {
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

    render() {
        return (
                    <Formik
                        validateOnBlur={false}
                        initialValues={{ email: '', password: '' }}
                        validationSchema={yup.object({
                            email: yup.string()
                                .email('Invalid email address')
                                .required(),
                            password: yup.string()
                                .min(8, "Password is too chort - minimum 8 chars")
                                .required()
                        })}
            
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                    <div className='login-form-wrapper login-form-wrapper-formik'>
                        <p>Прогортай вверх, щоб побачити варіант з Formik</p>
                        <Form className='loginForm'>
                            <h3 className='login-heading'>Sign in to your account (Formik)</h3>
                            
                            <Field className='login-form-input'
                                name='email' 
                                type='email' 
                                placeholder='Your email'
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                                />
                            <ErrorMessage name='email'/>
                
                            <Field className='login-form-input input-password' 
                                onChange={this.handlePasswordChange}
                                name='password' 
                                type='password'
                                placeholder='Your password' 
                                value={this.state.password}
                                />
                            <ErrorMessage name='password' />
                            <div className='keep-signed'>
                                <label>
                                    <Field className='login-checkbox' type='checkbox' name='keepSignIn'/>
                                Keep me signed in
                                </label>
                            </div>
                            <button className='btn-sign-in' type='submit' >Sign in</button>
                            <p className='password-restore-wrapper'>
                                    <a className='password-restore' href=''>Forgot your password?</a>
                            </p>
                        </Form>
                    </div>
                   
                    </Formik>
                );
            }
    };
    

export default LoginFormFormik;
