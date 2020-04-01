import projectData from "./data.js";
import Project from "./Project.js";

let projects = projectData.map((project) => {
    return new Project(
        project.name,
        project.weekProduced,
        project.description,
        project.languages,
        project.launchLink,
        project.codeLink,
        project.size,
        project.picture
    );
});

let allProjects = projects.forEach((project) => $("#projectDatabase").append(project.html));

