import '../assets/styles/pages/addusers.scss';
import UsersAddIcon from '../assets/icons/users-add.svg';

function AddUsers() {
  return (
    <>
      <div className='add'>
        <UsersAddIcon className='add__img' />
        <h1 className='add__title'>Add Users</h1>
      </div>
      <div className='form'>
        <span className='form__container'>
          <h3 className='form__title'>Select a CSV file:</h3>
          <input className='form__input input'></input>
          <button className='form__button btn '>Upload</button>
        </span>
      </div>
    </>
  );
}
export default AddUsers;
