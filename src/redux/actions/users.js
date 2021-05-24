export const loadUser = (login, password) => {
  return (dispatch) => {
    dispatch({
      type: 'users/auth/start',
    });
    fetch(`http://localhost:3010/users?login=${login}&password=${password}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.length === 1) {
          dispatch({
            type: 'users/auth/success',
            payload: json[0],
          });
        } else {
          dispatch({
            type: 'users/auth/error',
          });
        }
      });
  };
};

export const logout = () => {
  return {
    type: 'users/auth/logout',
  };
};

export const openingModal = () => {
  return {
    type: 'modal/opened',
  };
};

export const closingModal = () => {
  return {
    type: 'modal/closed',
  };
};
