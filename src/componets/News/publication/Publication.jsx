import React from 'react';
import './publication.css';
import moment from 'moment/min/moment-with-locales';
import ApproveBtn from './Approve-btn';
import DeleteBtn from './Delete-btn';
import PropTypes from 'prop-types';

function Publication({ publication, user }) {
  return (
    <div className="publication">
      <h3 className="publication__title">{publication.title}</h3>
      <p className="publication__content">{publication.content}</p>
      <div className="publication__author">Автор: {publication.author}</div>
      <div className="publication__date">
        {moment(publication.date).locale('ru').format('L')}
      </div>
      <div className="publication__info">
        <div className="publication__status">
          {user.id === publication.userId || user.admin ? (
            <>
              Статус:{' '}
              {publication.approved ? (
                <span className="publication__status_pos">одобренно</span>
              ) : (
                <span className="publication__status_neg">
                  находится на одобрении
                </span>
              )}
            </>
          ) : null}
        </div>
        {user.admin && !publication.approved ? (
          <ApproveBtn id={publication.id} />
        ) : null}
        {(user.id === publication.userId && !publication.approved) ||
        user.admin ? (
          <DeleteBtn id={publication.id} />
        ) : null}
      </div>
    </div>
  );
}

Publication.propTypes = {
  publication: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Publication;
