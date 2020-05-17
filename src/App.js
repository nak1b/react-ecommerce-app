import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './App.css'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.components'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(!userAuth) {
        this._setUser(userAuth)
        return 
      }
      
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        this._setUser({
          id: snapShot.id, 
          ...snapShot.data() 
        })
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  _setUser = (user) => {
    this.props.setCurrentUser(user)
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCurrentUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
