import Icon from '../assets/icons/users.svg';

import '../assets/styles/components/Filter.scss';

export default function Filter() {
  return (
    <main className="filter">
      <section className="title">
        <Icon className="logo icon"/>
        <h1>Users</h1>
      </section>
      <section className="filter__inputs">
        <div className="input">
          <strong className="input__label">Username/Name</strong>
          <input type="text" />
        </div>
        <div className="input">
          <strong className="input__label">Type</strong>
          <select>
            <option value="administrator">Administrator</option>
            <option value="patient">Patient</option>
            <option value="bacteriologist">Bacteriologist</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className="input">
          <strong className="input__label">Status</strong>
          <select>
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
