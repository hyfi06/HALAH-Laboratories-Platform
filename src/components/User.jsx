import '../assets/styles/components/User.scss';

function User() {
  return (
    <div className='user'>
      <img
        className='user__img'
        src='https://i.imgur.com/oMJFiLX.jpg'
        alt='use-photo'
      />
      <p className='user__data'>
        <h2 className='user__data__name'>Maria Jaramillo</h2>
        <p className='user__data__role'>Administrator</p>
      </p>
    </div>
  );
}

export default User;
