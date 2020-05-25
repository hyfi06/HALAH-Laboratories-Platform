import '../assets/styles/components/Header.scss';
import Logo from '../assets/icons/logo.svg';

function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <strong className="header__text">
        HALAH
        <br />
        Laboratories
      </strong>
    </header>
  );
}

export default Header;
