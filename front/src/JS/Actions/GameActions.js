import axios from "axios";
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

export const getAllgames = () => async (dispatch) => {
  dispatch({ type: GET_GAMES_LOADING });
  try {
    const result = await axios.get("/api/games/getGames");
    dispatch({ type: GET_GAMES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_GAMES_ERROR, payload: error.response.data });
  }
};

export const getGamesById = (id) => async (dispatch) => {
  dispatch({ type: GET_GAMES_BY_ID_LOADING });
  try {
    const result = await axios.get(`/api/games/getGameById/${id}`);
    dispatch({ type: GET_GAMES_BY_ID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_GAMES_BY_ID_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteGame = (id) => async (dispatch) => {
  dispatch({ type: DELETE_GAMES_LOADING });
  try {
    const result = await axios.delete(`/api/games/deleteGameById/${id}`);
    dispatch({ type: DELETE_GAMES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_GAMES_ERROR, payload: error.response.data });
  }
};

export const addGame = (newGame) => async (dispatch) => {
  dispatch({ type: ADD_GAMES_LOADING });
  try {
    const result = await axios.post("/api/games/addGame", newGame);
    dispatch({ type: ADD_GAMES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_GAMES_ERROR, payload: error.response.data });
  }
};

export const updateGame = (id, updatedGame) => async (dispatch) => {
  dispatch({ type: UPDATE_GAMES_LOADING });
  try {
    const result = await axios.put(`/api/games/updateGame/${id}`, updatedGame);
    dispatch({ type: UPDATE_GAMES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: UPDATE_GAMES_ERROR,
      payload: error.response?.data || error.message,
    });
  }
};
