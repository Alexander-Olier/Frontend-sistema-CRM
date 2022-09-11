import React, { useEffect } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../features/comments/commentSlice";

export default function ListComentarios() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.commentState);

  const {comments} = commentState;

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="flex">
        <div className="m-5">
          <CommentIcon></CommentIcon>
        </div>
        <div className="w-full">
          {comments && comments.map((comments, index)=>(
            <div>
          <div className="flex w-full">
            <h4>Comentario {index+1}</h4>
            <p className="ml-auto">10/03/2022 4:30PM</p>
          </div>
          <div className="w-full h-content bg-[#fff]">
            <p className="p-5">{comments.body}</p>
            <div className="flex space-x-4 text-[#006191] justify-end mr-5">
              <Link to={"/edit"}>
                <EditIcon fontSize="small" />
              </Link>
              <button>
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
          </div>
         ))}
          
          <p className="mt-5 text-center">No hay más comentarios</p>
        </div>
      </div>
    </div>
  );
}
