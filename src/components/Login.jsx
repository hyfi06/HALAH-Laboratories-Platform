import Logo from '../assets/icons/logo.svg';
import '../assets/styles/components/Login.scss';

export default function Login() {
  return (
    <section className='login card'>
      <div class='background-image'>
        <Logo className='logo' />
      </div>
      <form action='' className='form'>
        <div className='input lg'>
          <strong className='input__label'>Username / e-mail</strong>
          <input type='text' />
          {/* <small className='input__error'>Error message</small> */}
        </div>
        <div className='input lg'>
          <strong className='input__label'>Password</strong>
          <input type='password' />
          {/* <small className='input__error'>Error message</small> */}
        </div>
        <button className='btn lg form__login' type='button'>
          Login
        </button>
      </form>
    </section>
  );
}
