import query from "../db/utils";

const findAll = async () => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};
//async functions return a promise
const findOne = async (id) => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmployeeID = ?", [
    id
  ]);
};

export default {
    findAll,
    findOne
};