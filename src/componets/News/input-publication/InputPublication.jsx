import React, { useState } from 'react';
import './input-publication.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPublication } from '../../../redux/actions/news';

function InputPublication() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const [titleOfPublication, setTitleOfPublication] = useState();

  const [textOfPublication, setTextOfPublication] = useState();

  const handleAddPublication = () => {
    setTitleOfPublication('');
    setTextOfPublication('');
    dispatch(
      addPublication(titleOfPublication, textOfPublication, user.id, user.name),
    );
  };

  return (
    <div className="input-publication">
      <div className="input-publication_title">
        <h3>Добавить новую статью</h3>
        <input
          type="text"
          placeholder="Введите заголовок статьи"
          value={titleOfPublication}
          onChange={(event) => setTitleOfPublication(event.target.value)}
        />
      </div>
      <div className="input-publication__text">
        <textarea
          placeholder="Введите текст статьи"
          value={textOfPublication}
          onChange={(event) => setTextOfPublication(event.target.value)}
        />
      </div>
      <div className="input-publication__button">
        <button onClick={handleAddPublication}>Добавить</button>
      </div>
    </div>
  );
}

export default InputPublication;
