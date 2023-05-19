import query from "../db/utils";

const findAll = async () => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};
//async functions return a promise
const findOne = async (id) => {
  return query(
    "SELECT * FROM employees WHERE EmployeeID = ?",
    [id]
  );
};

const addOne = async (newEmployeeData) => {
//   const { FirstName, LastName, Title } = newEmployeeData;

  //POTENTIAL SQL INJECTION ATTACK BELOW!!!
   return query(
    // `Insert into employees (FirstName, LastName, Title) values ("/${FirstName}/", "/${LastName}/", "/${Title}/")`
    // Below is a shorthand of what is greened out PLUS it's safer against SQL Imjection attacks
    `INSERT INTO employees SET ?`, newEmployeeData
  );
};
async function updateOne(employeeId, updatedeData){
 return query(`UPDATE employees SET ? WHERE EmployeeID = ?`, [updatedeData, employeeId]);
}

async function removeOne(employeeId){
return query(`DELETE FROM employees WHERE EmployeeID = ?`, employeeId);
}

export default {
  findAll,
  findOne,
  addOne,
  removeOne,
  updateOne
};
