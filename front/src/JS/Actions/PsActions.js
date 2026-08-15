import axios from "axios";
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

export const getAllps = () => async (dispatch) => {
  dispatch({ type: GET_PS_LOADING });
  try {
    const result = await axios.get("/api/ps/getPs");
    dispatch({ type: GET_PS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PS_ERROR, payload: error.response.data });
  }
};

export const getpsById = (id) => async (dispatch) => {
  dispatch({ type: GET_PS_BY_ID_LOADING });
  try {
    const result = await axios.get(`/api/ps/getPsById/${id}`);
    dispatch({ type: GET_PS_BY_ID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_PS_BY_ID_ERROR,
      payload: error.response.data,
    });
  }
};

export const deletePs = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PS_LOADING });
  try {
    const result = await axios.delete(`/api/ps/deletePsById/${id}`);
    dispatch({ type: DELETE_PS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_PS_ERROR, payload: error.response.data });
  }
};

export const addps = (newPs) => async (dispatch) => {
  dispatch({ type: ADD_PS_LOADING });
  try {
    const result = await axios.post("/api/ps/addPs", newPs);
    dispatch({ type: ADD_PS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_PS_ERROR, payload: error.response.data });
  }
};

export const updatePs = (id, updatedPs) => async (dispatch) => {
  dispatch({ type: UPDATE_PS_LOADING });
  try {
    const result = await axios.put(`/api/ps/updatePs/${id}`, updatedPs);
    dispatch({ type: UPDATE_PS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: UPDATE_PS_ERROR,
      payload: error.response?.data || error.message,
    });
  }
};
