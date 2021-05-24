import React from 'react';
import './serach.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchNews } from '../../../redux/actions/news';

function Search() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.news.filter);

  const handleSearch = (e) => {
    dispatch(searchNews(e.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="поиск"
        value={filter}
        onChange={handleSearch}
      />
      {filter !== '' ? <button className="material-icons">clear</button> : null}
    </div>
  );
}

export default Search;
