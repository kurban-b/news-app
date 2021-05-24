import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Publication from './publication/Publication';
import { loadNews } from '../../redux/actions/news';
import InputPublication from './input-publication/InputPublication';
import ReactLoading from 'react-loading';

function News() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const auth = useSelector((state) => state.users.auth);

  const loading = useSelector((state) => state.news.loading);

  const filter = useSelector((state) => state.news.filter);

  const news = useSelector((state) => {
    return state.news.items
      .filter(
        (item) =>
          item.approved ||
          item.userId === state.users.user.id ||
          state.users.user.admin,
      )
      .filter((item) => {
        return item.title.toUpperCase().indexOf(filter.toUpperCase()) > -1;
      });
  });

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <div className="news">
      {!user.admin && auth ? <InputPublication /> : null}
      <div className="news__publications">
        {loading ? (
          <ReactLoading
            type={'spin'}
            color={'grey'}
            height={100}
            width={100}
            className="news__loader"
          />
        ) : (
          news.map((publication, index) => {
            return (
              <Publication publication={publication} key={index} user={user} />
            );
          })
        )}
      </div>
    </div>
  );
}

export default News;
