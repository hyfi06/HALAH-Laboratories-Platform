import '../assets/styles/pages/ui.scss';
import Logo from '../assets/icons/logo.svg';

export default function ui() {
  return (
    <main className="ui">
      <h1>UI Elements</h1>
      <br />

      <section className="card">
        <h2>Buttons</h2>
        <br />
        <div>
          <button className="btn" type="button">
            .btn
          </button>
          <button className="btn--positive" type="button">
            .btn--positive
          </button>
          <button className="btn--negative" type="button">
            .btn--negative
          </button>
        </div>
        <br />
        <h3>Large Buttons</h3>
        <br />
        <div>
          <button className="btn lg" type="button">
            .btn.lg
          </button>
          <button className="btn--positive lg" type="button">
            .btn--positive.lg
          </button>
          <button className="btn--negative lg" type="button">
            .btn--negative.lg
          </button>
        </div>
      </section>
      <br />

      <section className="card">
        <h2>Forms</h2>
        <div className="forms">
          <div className="input">
            <strong className="input__label">Input</strong>
            <input type="text" />
            <small className="input__error">Error message</small>
          </div>
          <div className="input">
            <strong className="input__label">Select</strong>
            <select>
              <option value="administrator">Administrator</option>
              <option value="patient">Patient</option>
            </select>
            <small className="input__error">Error message</small>
          </div>
        </div>
        <br />

        <h3>Large Forms</h3>
        <br />
        <div>
          <div className="input lg">
            <strong className="input__label">Input</strong>
            <input type="text" />
            <small className="input__error">Error message</small>
          </div>
          <div className="input lg">
            <strong className="input__label">Select</strong>
            <select>
              <option value="administrator">Administrator</option>
              <option value="patient">Patient</option>
            </select>
            <small className="input__error">Error message</small>
          </div>
        </div>
      </section>
      <br />

      <section className="card">
        <h2>Title</h2>
        <br />
        <div className="title">
          <Logo className="title__icon" />
          <h1 className="title__text">Title Text</h1>
        </div>
      </section>
    </main>
  );
}
