import { Router } from "express";

import * as comidasController from './../controllers/comidasControllers.js';

const router = Router();

router.get("/", comidasController.listAll);
router.get("/:id",comidasController.listOne)

export default router;