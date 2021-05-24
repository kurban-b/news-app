import React from 'react';
import './publication.css';
import { useDispatch } from 'react-redux';
import { approvePublication } from '../../../redux/actions/news';
import PropTypes from 'prop-types';

function ApproveBtn({ id }) {
  const dispatch = useDispatch();

  const handleApproveClick = () => {
    dispatch(approvePublication(id));
  };
  return (
    <button
      className="publication__button_approve"
      onClick={handleApproveClick}
    >
      одобрить
    </button>
  );
}

ApproveBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ApproveBtn;
