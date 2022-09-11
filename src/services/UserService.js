import http from "../http-common";

const getAll = () => {
  return http.get("/user");
};
const get = (id) => {
  return http.get(`/user/${id}`);
};
const create = (body) => {
  return http.post("/user/add", body);
};
const update = (id, body) => {
  return http.post("/user/update", body);
};
const remove = id => {
  console.log(id)
  return http.delete(`/user/delete/${id}`);
};

const UserService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default UserService;
