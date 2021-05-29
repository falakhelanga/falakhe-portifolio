import mongoose from "mongoose";

const Schema = mongoose.Schema();

const project = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const projectsScchema = new Schema({
  projects: [],
});
