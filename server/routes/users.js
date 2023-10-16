import  express  from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";


const router =express.Router();


//CREATE

//UPDATE
router.put("/:id",  updateUser);
//DELETE
router.delete("/:id",  deleteUser);
//GET

router.get("/find/:id", getUser);
//GET ALL

router.get("/", getUsers);


export default router