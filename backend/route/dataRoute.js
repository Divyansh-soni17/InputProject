import express from "express";
import { addmoredata } from "../controller/datacontroller.js";
const router = express.Router();

router.post("/adddata",addmoredata);


export default router;