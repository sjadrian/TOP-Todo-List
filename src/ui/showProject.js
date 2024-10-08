import {makeProjectUI} from './CreateTodoInProjectUI.js';
import {updateTotalProjectCountUI} from '../utils/countToDoInProjectUtils.js';
import { showHome } from './showHome.js';
import Project from '../classes/Project.js';

let projectContainer = document.getElementById("project-container");
let mainContent = document.getElementById("content-right");

export function showProject() {
    projectContainer.innerHTML = '';

    const localProjects = getAllProjects();

    localProjects.forEach((project)=> {

        // create div & give class todo
        let div = document.createElement("div");
        div.classList.add("project");

        let divTitle = document.createElement("div");
        divTitle.classList.add("hvr");
        divTitle.innerHTML = project.name;

        let divCount = document.createElement("div");
        divCount.classList.add("project-count");
        divCount.innerHTML = project.todos.length;
        divCount.id = project.name;

        div.appendChild(divTitle);
        div.appendChild(divCount);
        
        projectContainer.appendChild(div);

        divTitle.addEventListener("click", function() {
            displayProjectUI(project);            
        } )
    });
    updateTotalProjectCountUI();
}

export function displayProjectUI(project) {
    //clear home
    mainContent.innerHTML = '';  

    if (project.todos.length >= 1) {
        //show all projects
        let todos = project.todos;
        todos.forEach((todo)=> makeProjectUI(todo, project));
    } else {
        //create div 
        let divEmpty = document.createElement("div");
        divEmpty.innerHTML = "Empty Project!"
        divEmpty.id = "empty-title";

        let divCreateDelete = document.createElement("div");
        divCreateDelete.innerHTML = "Create a new to-do item or delete project."
        divCreateDelete.id = "empty-main";

        let deleteProject = document.createElement("button");
        deleteProject.innerHTML = "Delete Project";
        deleteProject.id = "empty-delete";

        mainContent.appendChild(divEmpty);
        mainContent.appendChild(divCreateDelete);
        mainContent.appendChild(deleteProject);

        deleteProject.addEventListener('click', () => {
            console.log("Deleting project:", project.name);
        
            // Filter out the project to be deleted
            let filteredProjects = getAllProjects().filter(existingProject => project.id !== existingProject.id);
            
            // Update the localStorage and refresh the UI
            updateAllProjects(filteredProjects);
            showHome(); 
            showProject();                       
                                      
        });
    }
}

export function getAllProjects() {
    const localProjectsData = JSON.parse(localStorage.getItem('allProjects') || '[]');  // <--- Added fallback for empty data
    return localProjectsData.map((projectData) => Project.fromJSON(projectData));
}

export function updateAllProjects(newProjects) {
    let newProjectsData = JSON.stringify(newProjects);
    localStorage.setItem('allProjects', newProjectsData);
    console.log('Projects after update:', getAllProjects());
}