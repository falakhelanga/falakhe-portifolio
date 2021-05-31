import mongoose from "mongoose";

const Schema = mongoose.Schema();

const project = new Schema({
  name: {
    type: String,

  },
  image: {
    type: String,
 
  },
  tags: [
    {
      type: String,
   
    },
  ],
  description: {
    type: String,

  },
  url: {
    type: String,
    
  },
  repo: {
    type: String,

  },
  cv: {
    type: String
  }
});

const projectsScchema = new Schema({
  projects: [project],
});

const Projects = mongoose.model("Projects", projectsScchema);
export default Projects;
