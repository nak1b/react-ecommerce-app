import React from 'react'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleOnChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleOnChange}
            required
          />

           <FormInput 
            name='password' 
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleOnChange}
            required
          />

          <CustomButton type='submit' onClick={() => {}}>
            Sign In
          </CustomButton>
          <CustomButton 
            type='submit' 
            onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn