import { Router } from "express";

const todosRouter = Router();

todosRouter.get("/", (req, res) => {
  res.send("list of todos");
});

export default todosRouter;
