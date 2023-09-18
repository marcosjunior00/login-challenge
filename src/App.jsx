import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  const handleSubmitForm = async () => {
    setIsLoadingSubmit(true);
    setIsErrorMessageVisible(false);
    try {
      const data = {
        email,
        password,
      }
  
      await login(data);
      alert("Login realizado com sucesso!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setIsErrorMessageVisible(true);
    }
    setIsLoadingSubmit(false);
  };

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        <div className='errorMessage' style={{display: isErrorMessageVisible ? "block" : "none"}}>E-mail ou senha inválidos</div>
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
            disabled={!email || !password || password.length < 6 || isLoadingSubmit}
            onClick={handleSubmitForm}
          >
            {isLoadingSubmit ? "Carregando..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
