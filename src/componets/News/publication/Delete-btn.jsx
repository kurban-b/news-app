import React from 'react';
import './publication.css';
import { useDispatch } from 'react-redux';
import { deletePublication } from '../../../redux/actions/news';
import PropTypes from 'prop-types';

function DeleteBtn({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePublication(id));
  };

  return (
    <button onClick={handleDelete} className="publication__button_delete">
      удалить
    </button>
  );
}

DeleteBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteBtn;
