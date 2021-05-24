const initialState = {
  items: [],
  loading: false,
  filter: '',
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'news/load/success':
      return {
        ...state,
        items: action.payload.reverse(),
        loading: false,
      };
    case 'news/adding/start':
      return {
        ...state,
        loading: true,
      };
    case 'news/adding/success':
      return {
        ...state,
        items: [action.payload, ...state.items],
        loading: false,
      };
    case 'news/deleted':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'news/approve/success':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              approved: true,
            };
          }
          return item;
        }),
      };
    case 'news/search':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
