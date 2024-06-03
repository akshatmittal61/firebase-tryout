import { Router } from "express";
import blogs from "./blogs.route";

const router = Router();

router.use("/blogs", blogs);

export default router;
