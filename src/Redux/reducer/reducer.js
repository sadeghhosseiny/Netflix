import { Type } from "../action types/actionTypes";

const initialState = {
  user: [],
  saveData: [],
  movieList: [],
  allMovies: null,
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ALL_MOVIES:
      console.log('REDUCER all movies', state.allMovies);
      console.log('ACTION.payload', action.payload);
      return {
        ...state,
        allMovies: action.payload
      };
    case Type.USER:
      return {
        ...state,
        user: action.payload,
        saveData: localStorage.setItem('user', action.payload)
      };
    case Type.ADD_TO_MY_LIST:
      return {
        // ...state,
        movieList: [...state?.movieList, action.payload]
      };

    case Type.MOVIE_PAGE:
      console.log('this is stateMOVIEpage', !!state?.data?.moviePage?.length);
      return {
        data: {
          moviePage: state?.data ? state?.data?.moviePage?.map((item, i) => {
            if (item.id == action.payload.id) {
              return;
            }
            else {
              return [...state?.data?.moviePage, action.payload];
            }
          })
            : [{ ...action.payload }]
          // ...state?.data,
          // moviePage: !!!(state?.data?.moviePage?.length) ? [{ ...action.payload }] :
          //   state?.data?.moviePage?.map(item => {
          //     if (item?.id !== action?.payload?.id) {
          //       console.log("IIIIIFFFFFF", item?.id);
          //       return (
          //         [...state?.data?.moviePage, action.payload]

          //       );
          //     }
          //   }
          //   )

          // return [...state?.data?.moviePage, action.payload]
          // console.log("EEEEEEEELLLLLLLLSSSSEe", item?.id);
          // return { ...action.payload  };

          // : [{ ...action.payload }]
        }
      };

    default:
      return state;
  }
};

export { reducer };