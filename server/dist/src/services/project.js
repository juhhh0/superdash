import prisma from "../../prisma/prisma.js";
export const getAllProjects = async () => {
    const projects = await prisma.project.findMany();
    return projects;
};
export const addNewProject = async (project) => {
    const newProject = await prisma.project.create({
        data: project,
    });
    return newProject;
};
