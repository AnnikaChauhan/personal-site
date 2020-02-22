import projectData from "./data.js";

import Project from "./Project.js";

let projects = projectData.map((project) => {
    return new Project(
        project.name,
        project.id,
        project.importance,
        project.description,
        project.launchLink,
        project.codeLink
    );
});

console.log(projects);

//projects.forEach((project) => $("#projectDatabase").append(project.html));