import {
  ADD_GAMES_ERROR,
  ADD_GAMES_LOADING,
  ADD_GAMES_SUCCESS,
  DELETE_GAMES_ERROR,
  DELETE_GAMES_LOADING,
  DELETE_GAMES_SUCCESS,
  GET_GAMES_BY_ID_ERROR,
  GET_GAMES_BY_ID_LOADING,
  GET_GAMES_BY_ID_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAMES_LOADING,
  GET_GAMES_SUCCESS,
  UPDATE_GAMES_ERROR,
  UPDATE_GAMES_LOADING,
  UPDATE_GAMES_SUCCESS,
} from "../ActionTypes/GameActionTypes";

const initialState = {
  load: false,
  success: null,
  errors: null,
  games: [],
  game: {},
};

const GameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES_LOADING:
      return { ...state, load: true, success: null, errors: null };

    case GET_GAMES_SUCCESS:
      return {
        ...state,
        load: false,
        games: payload?.games || (Array.isArray(payload) ? payload : []),
        success: payload?.message || null,
        errors: null,
      };

    case GET_GAMES_ERROR:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload?.message || payload,
      };

    case GET_GAMES_BY_ID_LOADING:
      return { ...state, load: true, success: null, errors: null };

    case GET_GAMES_BY_ID_SUCCESS:
      return {
        ...state,
        load: false,
        game: payload?.game || payload,
        success: payload?.message || null,
        errors: null,
      };

    case GET_GAMES_BY_ID_ERROR:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload?.message || payload,
      };

    case DELETE_GAMES_LOADING:
      return { ...state, load: true, errors: null };

    case DELETE_GAMES_SUCCESS:
      return { ...state, load: false, success: payload?.message };

    case DELETE_GAMES_ERROR:
      return { ...state, load: false, errors: payload?.message || payload };

    case ADD_GAMES_LOADING:
      return { ...state, load: true, errors: null };

    case ADD_GAMES_SUCCESS:
      return {
        ...state,
        load: false,
        games: payload?.game ? [payload.game, ...state.games] : state.games,
        success: payload?.success || payload?.message,
      };

    case ADD_GAMES_ERROR:
      return { ...state, load: false, errors: payload?.errors || payload };

    case UPDATE_GAMES_LOADING:
      return { ...state, load: true, errors: null };

    case UPDATE_GAMES_SUCCESS:
      return {
        ...state,
        load: false,
        game: payload?.game || state.game,
        games: state.games.map((item) =>
          item._id === payload?.game?._id ? payload.game : item,
        ),
        success: payload?.message || null,
        errors: null,
      };

    case UPDATE_GAMES_ERROR:
      return { ...state, load: false, errors: payload?.message || payload };

    default:
      return state;
  }
};

export default GameReducer;
