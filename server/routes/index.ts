import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
  //res.send("getting tasks");
});

router.post("/tasks", async (req, res) => {
  //console.log(req.body);
  const { title, description } = req.body;
  const task = new Task({ title, description });
  //console.log(task);
  await task.save();
  //res.send("creating tasks");
  res.json(task);
});

router.get("/tasks/:id", async (req, res) => {
  //res.send("getting a task");
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.send(task);
  } catch (e) {
    //res.send(e);
    console.log(e);
    return res.status(500).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  //res.send("deleting a task");
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.send(task);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

router.put("/tasks/:id", async (req, res) => {
  //res.send("updating a task");
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updateTask);
});

export default router;
