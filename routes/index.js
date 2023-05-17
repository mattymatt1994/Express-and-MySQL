import express from "express";
// TODO: import router from users.route
import employeesRouter from "./employees.route";


const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/employees", employeesRouter);


export default router;
