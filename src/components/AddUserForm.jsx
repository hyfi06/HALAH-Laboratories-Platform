import '../assets/styles/components/AddUserForm.scss';

function AddUserForm() {
  return (
    <>
      <div className='add-user'>
        <div className='add-user__type input'>
          <strong className='add-user__type__text '>Type</strong>
          <select
            className='add-user__type__select input__field'
            placeholder='Enter '
          >
            <option disabled selected>
              Select
            </option>
            <option value='doctor'>Doctor</option>
            <option value='patient'>Patient</option>
            <option value='bacteriologist'>Bacteriologist</option>
            <option value='admin'>Administrator</option>
          </select>
        </div>
        <h2 className='add-user__title-section'>User Information</h2>
        <div className='add-user__information-container'>
          <div className='add-user__input input '>
            <strong className='add-user__input__strong input__label'>
              Profile Image
            </strong>
            <input
              placeholder='Upload'
              type='file'
              className='add-user__input__field  input__field'
            ></input>
          </div>
          <div className='add-user__input input '>
            <strong className='add-user__input__strong input__label'>
              Document ID
            </strong>
            <input
              type='text'
              className='add-user__input__field input__field'
            ></input>
          </div>
          <div className='add-user__input input '>
            <strong className='add-user__input__strong input__label'>
              Name
            </strong>
            <input
              type='text'
              className='add-user__input__field input__field'
            ></input>
          </div>
          <div className='add-user__input input '>
            <strong className='add-user__input__strong input__label'>
              Last Name
            </strong>
            <input
              type='text'
              className='add-user__input__field input__field'
            ></input>
          </div>
        </div>
        <h2 className='add-user__title-section'>Contact</h2>
        <div className='add-user__information-container'>
          <div className='add-user__input input '>
            <strong className='add-user__input__strong input__label'>
              email
            </strong>
            <input
              type='email'
              className='add-user__input__field input__field'
            ></input>
          </div>
          <div className='add-user__input input '>
            <strong className='add-user__input__strong input__label'>
              Phone Number
            </strong>
            <input
              type='tel'
              className='add-user__input__field input__field'
            ></input>
          </div>
        </div>
        <div className='add-user__confirm'>
          <button className='add-user__confirm__button btn ' type='submit'>
            Add User
          </button>
        </div>
      </div>
    </>
  );
}
export default AddUserForm;
