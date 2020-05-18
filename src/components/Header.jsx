import Logo from '../assets/icons/logo.svg';

import '../assets/styles/components/Header.scss';

export default function Header() {
  return (
    <header>
      <Logo className="logo--white" />
      <h3>
        HALAH
        <br />
        Laboratories
      </h3>
    </header>
  );
}
