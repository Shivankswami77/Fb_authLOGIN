import React,{useState,Component} from 'react';
import { Redirect } from "react-router-dom";

import './App.css';
import firebase from "firebase"

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { render } from '@testing-library/react';
firebase.initializeApp({
  apiKey:"AIzaSyDT2A6Yt8JxxhUSnWXwnA1w6oGnv6bvjTA",
  authDomain:"fblogin-dbf31.firebaseapp.com"
})
const App = () =>  {
  const [isSignedin, setIsSignedin] = useState(false)
  const uiConfig = {
    signinFlow:"popup",
    signInSuccessUrl: '/',
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      
      signInSuccess: function(currentUser, credential, redirectUrl) {
        const userId = currentUser.uid;
        redirectUrl = `/users`;
        return false
      
    }
  }
}

 
firebase.auth().onAuthStateChanged(user => {
  setIsSignedin(isSignedin)
})
  
  
  
  return (
    <div className="App">
      {isSignedin ? (
        <div>
        <h1>Signed In</h1>
       
       <button onClick = {() => firebase.auth().signOut()}>Sign out</button>
       </div>
        
      ): 
        (
          <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
          />
        )
        
       }
    </div>
      
  );
}

export default App;
