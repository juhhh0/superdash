import prisma from "../../prisma/prisma.js";
import { ProjectType } from "../types/project.js";

export const getAllProjects = async () => {
  const projects = await prisma.project.findMany();
  
  return projects;
};

export const addNewProject = async (project: ProjectType) => {
  const newProject = await prisma.project.create({
    data: project,
  });

  return newProject;
};
