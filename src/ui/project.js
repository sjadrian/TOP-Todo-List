import {makeProjectUI} from './todo-project-UI.js';
import {updateTotalProjectCountUI} from '../utils/countToDoInProjectUtils.js';
import { sortToDo } from '../utils/countToDoUtils.js';
import { showHome } from './home.js';

import { allProjects, allTodos } from '../data/store.js';

import { allButtons } from '../data/store.js';
import {changeActiveTab} from './changeActiveTab.js';

let projectContainer = document.getElementById("project-container");
let mainContent = document.getElementById("content-right");

export function showProject() {

    projectContainer.innerHTML = '';

    allProjects.get().forEach((project)=> {

        // create div & give class todo
        let div = document.createElement("div");
        div.classList.add("project");

        let divTitle = document.createElement("div");
        divTitle.classList.add("hvr");
        divTitle.innerHTML = project.name;

        let divCount = document.createElement("div");
        divCount.classList.add("project-count");
        divCount.innerHTML = project.length();
        divCount.id = project.name;

        div.appendChild(divTitle);
        div.appendChild(divCount);
        
        projectContainer.appendChild(div);

        //add buttons
        allButtons.add(divTitle);

        divTitle.addEventListener("click", function() {
            displayProjectUI(project);
            changeActiveTab(divTitle);
            
        } )
    });
    updateTotalProjectCountUI();
}

export function displayProjectUI(project) {
    //clear home
    mainContent.innerHTML = '';  

    if (project.length() >= 1) {
        console.log("yow1");
        // project.todos = sortToDo(project.todos);
        
        //show all projects
        let todos = project.todos;
        todos.forEach((todo)=> makeProjectUI(todo, project));
    } else {

        console.log("yow2");

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

        deleteProject.addEventListener('click', ()=> {

            console.log("delete proj");

            allButtons.remove(project.title);

            let filteredProjects = allProjects.get().filter(existingProject => project !== existingProject);
            allProjects.set(filteredProjects);

            showProject();
            showHome();
        })
    }
}