import React from 'react';
import LoginForm from './LoginComponent'
const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}


class App extends React.Component {
  
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        <h1>Login Component using form</h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}


export default App;
