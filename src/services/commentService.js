import http from "../http-common";

const getAll = (id) => {
  return http.get(`/comment/${id}`);
};

const create = (body) => {
  console.log(body)
  return http.post(`/comment/add/${body.id}`, body);
};
const update = (id, body) => {
  return http.post("/comment/update", body);
};
const remove = id => {
  console.log(id)
  return http.delete(`/comment/delete/${id}`);
};

const CommentService = {
  getAll,
  create,
  update,
  remove,
};

export default CommentService;
