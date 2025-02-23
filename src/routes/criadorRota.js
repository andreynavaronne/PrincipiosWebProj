import express from "express";
import {create, findAll, findOne, update, remove} from "../controllers/criadorController.js";

const router = express.Router();

router.post("/criador", create);
router.get("/criador", findAll);
router.get("/criador/:id", findOne);
router.put("/criador/:id", update);
router.delete("/criador/:id", remove);

export default router;