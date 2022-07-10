import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const addPerson = (obj) => {
  return axios.post(baseUrl, obj).then((res) => {
    console.log(res);
  });
};

const deletePerson = (obj) => {
  return axios.delete(baseUrl + "/" + obj.id).then((res) => {
    console.log(res);
  });
};

const updatePerson = (id, obj) => {
  // 这里需要用 return 返回 promise 对象，使得后面的 catch 能生效
  return axios.put(`${baseUrl}/${obj.id}`, obj).then((res) => {
    console.log("到这了", res);
  });
};

export { addPerson, deletePerson, updatePerson };
