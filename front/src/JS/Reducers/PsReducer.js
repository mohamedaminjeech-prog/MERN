import {
  ADD_PS_ERROR,
  ADD_PS_LOADING,
  ADD_PS_SUCCESS,
  DELETE_PS_ERROR,
  DELETE_PS_LOADING,
  DELETE_PS_SUCCESS,
  GET_PS_BY_ID_ERROR,
  GET_PS_BY_ID_LOADING,
  GET_PS_BY_ID_SUCCESS,
  GET_PS_ERROR,
  GET_PS_LOADING,
  GET_PS_SUCCESS,
  UPDATE_PS_ERROR,
  UPDATE_PS_LOADING,
  UPDATE_PS_SUCCESS,
} from "../ActionTypes/PsActionTypes";

const initialState = {
  load: false,
  success: null,
  errors: null,
  ps: [],
  psDetails: {},
};

const PsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PS_LOADING:
      return { ...state, load: true, success: null, errors: null };

    case GET_PS_SUCCESS:
      return {
        ...state,
        load: false,
        ps: payload?.ps || (Array.isArray(payload) ? payload : []),
        success: payload?.message || null,
        errors: null,
      };

    case GET_PS_ERROR:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload?.message || payload,
      };

    case GET_PS_BY_ID_LOADING:
      return { ...state, load: true, success: null, errors: null };

    case GET_PS_BY_ID_SUCCESS:
      return {
        ...state,
        load: false,
        psDetails: payload?.ps || payload,
        success: payload?.message || null,
        errors: null,
      };

    case GET_PS_BY_ID_ERROR:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload?.message || payload,
      };

    case DELETE_PS_LOADING:
      return { ...state, load: true, errors: null };

    case DELETE_PS_SUCCESS:
      return { ...state, load: false, success: payload?.message };

    case DELETE_PS_ERROR:
      return { ...state, load: false, errors: payload?.message || payload };

    case ADD_PS_LOADING:
      return { ...state, load: true, errors: null };

    case ADD_PS_SUCCESS:
      return {
        ...state,
        load: false,
        ps: payload?.ps ? [payload.ps, ...state.ps] : state.ps,
        success: payload?.success || payload?.message,
      };

    case ADD_PS_ERROR:
      return { ...state, load: false, errors: payload?.errors || payload };

    case UPDATE_PS_LOADING:
      return { ...state, load: true, errors: null };

    case UPDATE_PS_SUCCESS:
      return {
        ...state,
        load: false,
        psDetails: payload?.ps || state.psDetails,
        ps: state.ps.map((item) =>
          item._id === payload?.ps?._id ? payload.ps : item,
        ),
        success: payload?.message || null,
        errors: null,
      };

    case UPDATE_PS_ERROR:
      return { ...state, load: false, errors: payload?.message || payload };

    default:
      return state;
  }
};

export default PsReducer;
