import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        <div className='errorMessage'></div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='button'>
          <button 
            disabled={!email || !password}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
