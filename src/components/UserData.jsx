import '../assets/styles/components/UserData.scss';

function UserData() {
  return (
    <div className='user-data'>
      <h2 className='user-data__title'> User Information</h2>
      <div className='user-data__container'>
        <span className='user-data__element'>
          <p className='user-data__element__title'>Name</p>
          <p className='user-data__element_content'>María</p>
        </span>
        <span className='user-data__element'>
          <p className='user-data__element__title'>Last Name</p>
          <p className='user-data__element_content'>Jaramillo</p>
        </span>
        <span className='user-data__element'>
          <p className='user-data__element__title'>Document ID</p>
          <p className='user-data__element_content'>12342545345</p>
        </span>
      </div>
      <h2 className='user-data__title'> Contact</h2>
      <div className='user-data__container'>
        <span className='user-data__element'>
          <p className='user-data__element__title'>email</p>
          <p className='user-data__element_content'>
            maria.jaramillo@gmail.com
          </p>
        </span>
        <span className='user-data__element'>
          <p className='user-data__element__title'>Phone Number</p>
          <p className='user-data__element_content'>55 34 76 12 42</p>
        </span>
      </div>
    </div>
  );
}
export default UserData;
