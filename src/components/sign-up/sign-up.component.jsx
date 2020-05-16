import React from 'react'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  resetState = () => {
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state 

    if(password !== confirmPassword) {
      alert('Password do not match')
      return 
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      
      await createUserProfileDocument(user, { displayName })
      this.resetState()
    } catch(error) {
      console.log('error creating user ', error)
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state 

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign Up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            name='displayName' 
            type='text'
            label='Display Name'
            value={displayName}
            handleChange={this.handleOnChange}
            required
          />
          <FormInput 
            name='email' 
            type='email'
            label='Email'
            value={email}
            handleChange={this.handleOnChange}
            required
          />
          <FormInput 
            name='password' 
            type='password'
            label='Password'
            value={password}
            handleChange={this.handleOnChange}
            required
          />
           <FormInput 
            name='confirmPassword' 
            type='password'
            label='Confirm Password'
            value={confirmPassword}
            handleChange={this.handleOnChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' onClick={() => {}}>
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp