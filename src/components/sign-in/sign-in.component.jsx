import React from 'react'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  resetState = () => { 
    this.setState({ email : '', password: '' })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = this.state 

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.resetState()
    } catch(error) {
      console.log('error Signing In ', error)
    }
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
          <div className='buttons'>
            <CustomButton type='submit' onClick={() => {}}>
              Sign In
            </CustomButton>
            <CustomButton 
              type='submit' 
              isGoogleSignIn={true}
              onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn