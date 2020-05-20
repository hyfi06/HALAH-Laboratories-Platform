import '../assets/styles/components/DataUser.scss';

function DataUser() {
  return (
    <div className='admin'>
      <h2 className='admin__information'> User Information</h2>
      <div className='admin__information__container'>
        <ul className='admin__information__list'>
          <h4 className='admin__information__title'>Name</h4>
          <p className='admin__information__data'>María</p>
        </ul>
        <ul className='admin__information__list'>
          <h4 className='admin__information__title'>Last Name</h4>
          <p className='admin__information__data'>Jaramillo</p>
        </ul>
      </div>
      <h2 className='admin__information'> Contact</h2>
      <div className='admin__information__container'>
        <ul className='admin__information__list'>
          <h4 className='admin__information__title'>email</h4>
          <p className='admin__information__data'>maria.jaramillo@gmail.com</p>
        </ul>
        <ul className='admin__information__list'>
          <h4 className='admin__information__title'>Phone Number</h4>
          <p className='admin__information__data'>55 34 76 12 42</p>
        </ul>
      </div>
      <ul className='admin__information__ID'>
        <h4 className='admin__information__title'>Document ID</h4>
        <p className='admin__information__data'>12342545345</p>
      </ul>
    </div>
  );
}
export default DataUser;
