import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC4Kt4pHlC6S68Z45A5yyfsHPoUuRMlyxg',
  authDomain: 'crwn-db-1aa9c.firebaseapp.com',
  databaseURL: 'https://crwn-db-1aa9c.firebaseio.com',
  projectId: 'crwn-db-1aa9c',
  storageBucket: 'crwn-db-1aa9c.appspot.com',
  messagingSenderId: '907388927186',
  appId: '1:907388927186:web:d59af38e0dac44c056c10b'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) { return }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({ 
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })

    } catch(error) {
      console.log('error creating user ', error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase