const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  auth: JSON.parse(localStorage.getItem('user')) || false,
  authorizing: false,
  modal: false,
  error: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/auth/start':
      return {
        ...state,
        authorizing: true,
        error: false,
      };
    case 'users/auth/success':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        auth: true,
        authorizing: false,
        modal: false,
      };
    case 'users/auth/error':
      return {
        ...state,
        error: true,
        authorizing: false,
      };
    case 'users/auth/logout':
      localStorage.removeItem('user');
      return {
        ...state,
        user: {},
        auth: false,
      };
    case 'modal/opened':
      return {
        ...state,
        modal: true,
      };
    case 'modal/closed':
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
