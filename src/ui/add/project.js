import Project from "../../classes/Project";
import { showHome } from "../home";
import { showProject, displayProjectUI } from "../project";

const addContent = document.getElementById("content-add-right");
const addModal = document.getElementById("modal-add");
const mainWindow = document.getElementById("main-content");


function closeAddModal() {
    addModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export default function showAddProject(projects, todos) {
    addContent.innerHTML = "";

    // Create the main container div (project-container-add)
    let projectContainerDiv = document.createElement("div");
    projectContainerDiv.id = "project-container-add";

    // Create the form element (project-add-form)
    let formElement = document.createElement("form");
    formElement.id = "project-add-form";
    formElement.action = ""; // Leave action empty as per the HTML snippet

    // Create the input element for the project title
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title-project-add";
    titleInput.name = "title";
    titleInput.placeholder = "Title:";
    titleInput.required = true;
    titleInput.maxLength = 20;

    // Create the blank div (project-add-blank)
    let blankDiv = document.createElement("div");
    blankDiv.id = "project-add-blank";

    // Create the confirm button (confirm-project-add)
    let confirmButton = document.createElement("button");
    confirmButton.id = "confirm-project-add";
    confirmButton.textContent = "Create Project";

    // Append the input, blank div, and button to the form
    formElement.appendChild(titleInput);
    formElement.appendChild(blankDiv);
    formElement.appendChild(confirmButton);

    // Append the form to the container div
    projectContainerDiv.appendChild(formElement);

    addContent.appendChild(projectContainerDiv);


    confirmButton.addEventListener('click', (event)=> {
        event.preventDefault();

        let title = titleInput.value;

        //new todo
        const newProject = new Project(title);
        // const todo1 = new ToDo("shopping list xx", "1 egg", new Date("2024-09-30"), "low");
        // newProject.addTodo(todo1);

        //add todo to alltodo
        projects.push(newProject);

        // show new todo
        showProject(projects, todos);
        displayProjectUI(newProject, projects, todos);

        //close dialog
        closeAddModal();
    });
};