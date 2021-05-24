import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, openingModal } from '../../../redux/actions/users';
import './profile.css';

function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const auth = useSelector((state) => state.users.auth);

  const handleOpenModal = () => {
    dispatch(openingModal());
  };

  const handleCloseModal = () => {
    dispatch(logout());
  };

  if (auth) {
    return (
      <div className="profile">
        <div className="profile__name">{user.name}</div>
        <div className="profile__button">
          <button onClick={handleCloseModal}>Выход</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile__name">{user.name}</div>
      <div className="profile__button">
        <button onClick={handleOpenModal}>Вход</button>
      </div>
    </div>
  );
}

export default Profile;
