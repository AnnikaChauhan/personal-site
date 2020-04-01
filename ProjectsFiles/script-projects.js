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
let filterResult = allProjects;

console.log(projects);
console.log(projects[0].name);

const searchbar = document.getElementById("search");

const clearExistingFilter = () => {
    filterResult = [];
}

searchbar.onchange = () => {
    clearExistingFilter();
    const searchValueLowerCase = searchbar.value.toLowerCase();
    filterResult = projects.filter(project => project.name.toLowerCase().includes(searchValueLowerCase));
    console.log(filterResult);
    searchbar.value = "";

    //build render method

    filterResult.forEach((project) => $("#projectDatabase").append(project.html));
}