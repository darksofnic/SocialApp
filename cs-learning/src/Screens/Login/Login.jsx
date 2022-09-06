import React, { Component} from 'react'

import './Login.css';

export default class Login extends Component {

  render() {
    return (
      <div>
        <header>Login</header>
        <body>
          <form class="box" method="POST" action="/signup">
            <label>Username</label> <br/>     
              <input type='text' id='' name='' placeholder='Email / Username'  /><br/>
            <label>Password</label>
              <input type='password' id='' name='' placeholder='Password'  /><br/>
            <br/>
           
            <button > Sign In</button>
            <br/>
            <label > Dont have an account?</label><a className='hlink' href='/signup'> Signup Now!</a>
          </form>
        </body>
        <footer></footer>
      </div>
    )
  }
}


// Add Remember me!
// <label>Remember me</label>  <input type='checkbox' className='#input2' id='input2' name=''/><br/><br/>
