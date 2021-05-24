import React, { useState } from 'react';
import './modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { closingModal, loadUser } from '../../redux/actions/users';
import ReactLoading from 'react-loading';

function Authorization() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.users.error);

  const authorizing = useSelector((state) => state.users.authorizing);

  const [viewPassword, setViewPassword] = useState(false);

  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');

  const handleDispatchData = () => {
    dispatch(loadUser(login, password));
  };

  const handleCloseModal = () => {
    dispatch(closingModal());
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="modal">
      <div className="modal__card">
        <h3 className="modal__title">Авторизация</h3>
        <input
          type="text"
          className="modal__input modal__input_login"
          placeholder="логин"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <div className="modal__input_wrap">
          <input
            type={viewPassword ? 'text' : 'password'}
            className="modal__input modal__input_password"
            placeholder="пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {password !== '' && (
            <button
              className="material-icons modal__button_password"
              onClick={handleViewPassword}
            >
              visibility
            </button>
          )}
        </div>
        <button
          className="modal__button"
          onClick={() => handleDispatchData()}
          disabled={authorizing}
        >
          {authorizing ? (
            <ReactLoading
              type={'spin'}
              color={'#fff'}
              height={15}
              width={15}
              className="modal__loader"
            />
          ) : (
            'Войти'
          )}
        </button>
        <button
          className="modal__button_close material-icons"
          onClick={handleCloseModal}
        >
          close
        </button>
        <div className="modal__error-row">
          {error && 'Вы ввели неправильно логин или пароль'}
        </div>
      </div>
    </div>
  );
}

export default Authorization;
