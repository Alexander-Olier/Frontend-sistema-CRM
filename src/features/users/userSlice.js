import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

const initialState = {
  users: [],
  user:[], 
  getUsersStatus: "",
  getUsersError: "",
  getOneStatus: "",
  getOneError: "",
  deleteOneStatus: "",
  deleteOneError: "",
};
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const res = await UserService.getAll();
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const res = await UserService.get(id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    const res = await UserService.remove(id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const userAdd = createAsyncThunk("users/userAdd", async (body) => {
  try {
    const res = await UserService.create(body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      return {
        ...state,
        getUsersStatus: "pending",
        getUsersError: "",
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
    [getUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        users: action.payload,
        getUsersStatus: "success",
        getUsersError: "",
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
    [getUsers.rejected]: (state, action) => {
      return {
        ...state,
        getUsersStatus: "reject",
        getUsersError: action.payload,
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
    //DELETE
    [deleteUser.pending]: (state, action) => {
      return {
        ...state,
        getUsersStatus: "pending",
        getUsersError: "",
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
    [deleteUser.fulfilled]: (state, action) => {
      return {
        ...state,
        users: action.payload,
        getUsersStatus: "",
        getUsersError: "",
        deleteUserStatus: "success",
        deleteUserError: "",
      };
    },
    [deleteUser.rejected]: (state, action) => {
      return {
        ...state,
        getUsersStatus: "",
        getUsersError: "",
        deleteUserStatus: "reject",
        deleteUserError: action.payload,
      };
    },
    //get one
    [getUser.pending]: (state, action) => {
      return {
        ...state,
        getUsersStatus: "",
        getUsersError: "",
        getOneStatus: "pending",
        getOneError: "",
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
    [getUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload,
        getUsersStatus: "success",
        getUsersError: "",
        getOneStatus: "",
        getOneError: "",
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
    [getUser.rejected]: (state, action) => {
      return {
        ...state,
        getUsersStatus: "",
        getUsersError: "",
        getOneStatus: "reject",
        getOneError: "",
        deleteUserStatus: "",
        deleteUserError: "",
      };
    },
  },
});

export default userSlice.reducer;
