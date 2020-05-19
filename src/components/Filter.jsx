import UsersIcon from '../assets/icons/users.svg';

import '../assets/styles/components/Filter.scss';

export default function Filter() {
  return (
    <main className="filter">
      <section className="filter__title">
        <UsersIcon className="filter__title__logo" />
        <h1 className="filter__title__text">Users</h1>
      </section>
      <section className="filter__inputs">
        <div className="filter__inputs__item">
          <strong className="filter__inputs__item__label input__label">Username/Name</strong>
          <input type="text" className="filter__inputs__item__input input__field" />
        </div>
        <div className="filter__inputs__item">
          <strong className="filter__inputs__item__label input__label">Type</strong>
          <select className="filter__inputs__item__input input__field">
            <option value="administrator">Administrator</option>
            <option value="patient">Patient</option>
            <option value="bacteriologist">Bacteriologist</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className="filter__inputs__item">
          <strong className="filter__inputs__item__label input__label">Status</strong>
          <select className="filter__inputs__item__input input__field">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="btn" type="button">
          Filter
        </button>
      </section>
    </main>
  );
}
