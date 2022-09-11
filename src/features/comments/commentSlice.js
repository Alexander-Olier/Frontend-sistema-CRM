import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CommentService from "../../services/commentService";

const initialState = {
  comments: [],
  comment:[], 
  getCommentsStatus: "",
  getCommentsError: "",
  getOneStatus: "",
  getOneError: "",
  deleteOneStatus: "",
  deleteOneError: "",
};
export const getComments = createAsyncThunk("Comments/getComments", async (id) => {
  try {
    const res = await CommentService.getAll(id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteComment = createAsyncThunk("Comments/deleteComment", async (id) => {
  try {
    const res = await CommentService.remove(id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const CommentAdd = createAsyncThunk("Comments/CommentAdd", async (body) => {
  try {
    const res = await CommentService.create(body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const commentSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state, action) => {
      return {
        ...state,
        getCommentsStatus: "pending",
        getCommentsError: "",
        deleteCommentStatus: "",
        deleteCommentError: "",
      };
    },
    [getComments.fulfilled]: (state, action) => {
      return {
        ...state,
        comments: action.payload,
        getCommentsStatus: "success",
        getCommentsError: "",
        deleteCommentStatus: "",
        deleteCommentError: "",
      };
    },
    [getComments.rejected]: (state, action) => {
      return {
        ...state,
        getCommentsStatus: "reject",
        getCommentsError: action.payload,
        deleteCommentStatus: "",
        deleteCommentError: "",
      };
    },
    //DELETE
    [deleteComment.pending]: (state, action) => {
      return {
        ...state,
        getCommentsStatus: "pending",
        getCommentsError: "",
        deleteCommentStatus: "",
        deleteCommentError: "",
      };
    },
    [deleteComment.fulfilled]: (state, action) => {
      return {
        ...state,
        comments: action.payload,
        getCommentsStatus: "",
        getCommentsError: "",
        deleteCommentStatus: "success",
        deleteCommentError: "",
      };
    },
    [deleteComment.rejected]: (state, action) => {
      return {
        ...state,
        getCommentsStatus: "",
        getCommentsError: "",
        deleteCommentStatus: "reject",
        deleteCommentError: action.payload,
      };
    },
  },
});

export default commentSlice.reducer;
