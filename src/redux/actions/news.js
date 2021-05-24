export const loadNews = () => {
  return (dispatch) => {
    dispatch({
      type: 'news/load/start',
    });

    fetch('http://localhost:3010/news')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'news/load/success',
          payload: json,
        });
      });
  };
};
export const approvePublication = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'news/approve/start',
    });

    fetch(`http://localhost:3010/news/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        approved: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      dispatch({
        type: 'news/approve/success',
        payload: id,
      });
    });
  };
};

export const addPublication = (title, text, id, name) => {
  return (dispatch) => {
    dispatch({
      type: 'news/adding/start',
    });

    fetch('http://localhost:3010/news', {
      method: 'POST',
      body: JSON.stringify({
        author: name,
        userId: id,
        title: title,
        content: text,
        date: Date,
        approved: false,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'news/adding/success',
          payload: json,
        });
      });
  };
};

export const deletePublication = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'news/deleting/start',
    });

    fetch(`http://localhost:3010/news/${id}`, {
      method: 'DELETE',
    }).then(() => {
      dispatch({
        type: 'news/deleted',
        payload: id,
      });
    });
  };
};

export const searchNews = (text) => {
  return {
    type: 'news/search',
    payload: text,
  };
};
