import mongoose from "mongoose";
import Projects from "../model/projects";

const projectsHandler = (req, res) => {
  const { image, cv, repo, url, description, title, tags } = req.body;
};

export default projectsHandler;
