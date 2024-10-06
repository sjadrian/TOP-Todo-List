import ToDo from "../../classes/ToDo";

import { showProject, displayProjectUI } from "../project";

const addContent = document.getElementById("content-add-right");
const addModal = document.getElementById("modal-add");
const mainWindow = document.getElementById("main-content");

function closeAddModal() {
    addModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export default function showAddProjectTodo(projects, todos) {
    addContent.innerHTML = "";

    // Create the main container div (project-todo-container-add)
    let projectTodoContainerDiv = document.createElement("div");
    projectTodoContainerDiv.id = "project-todo-container-add";

    // Create the form element (project-todo-add-form)
    let formElement = document.createElement("form");
    formElement.id = "project-todo-add-form";
    formElement.action = ""; // Leave action attribute empty

    // Create the choose project div (choose-project-todo-add)
    let chooseProjectDiv = document.createElement("div");
    chooseProjectDiv.id = "choose-project-todo-add";


    if (projects.length >= 1) {

        // Create the label for the select dropdown
        let labelElement = document.createElement("label");
        labelElement.setAttribute("for", "exams");
        labelElement.id = "label-project-todo-add";
        labelElement.innerHTML = "<b>Select Project:</b>";

        
        // Create the select dropdown (exams) with options
        let selectElement = document.createElement("select");
        selectElement.id = "select-project-todo";
        selectElement.name = "select-project-todo";
        selectElement.required = true;

        let defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = "Select Project";

        
        selectElement.appendChild(defaultOption);

        projects.forEach((project)=> {

            console.log(project.name);

            let option = document.createElement("option");
            option.value = project.name; 
            option.textContent = project.name;

            selectElement.appendChild(option);
        })

        // Append label and select to chooseProjectDiv
        chooseProjectDiv.appendChild(labelElement);
        chooseProjectDiv.appendChild(selectElement);

        // Create the input element for the to-do title
        let titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "project-todo-add";
        titleInput.name = "title";
        titleInput.placeholder = "Title:";
        titleInput.required = true;
        titleInput.maxLength = 20;

        // Create the textarea element for the to-do description
        let descriptionTextarea = document.createElement("textarea");
        descriptionTextarea.id = "description-project-todo-add";
        descriptionTextarea.name = "description";
        descriptionTextarea.rows = 4;
        descriptionTextarea.cols = 39;
        descriptionTextarea.placeholder = "Description:";

        // Create the due date div (duedate-project-todo-add)
        let dueDateDiv = document.createElement("div");
        dueDateDiv.id = "duedate-project-todo-add";

        // Create the bold label and input for due date
        let dueDateLabel = document.createElement("b");
        dueDateLabel.textContent = "Due Date: ";

        let dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.id = "date-project-todo-add";
        dueDateInput.name = "date-add";
        dueDateInput.required = true;

        // Append label and input to the dueDateDiv
        dueDateDiv.appendChild(dueDateLabel);
        dueDateDiv.appendChild(dueDateInput);

        // Create the last row div (last-row-project-todo-add)
        let lastRowDiv = document.createElement("div");
        lastRowDiv.id = "last-row-project-todo-add";

        // Create the priority div (priority-project-todo-add)
        let priorityDiv = document.createElement("div");
        priorityDiv.id = "priority-project-todo-add";

        // Create the bold element for 'Priority:'
        let priorityLabel = document.createElement("b");
        priorityLabel.textContent = "Priority:";
        priorityDiv.appendChild(priorityLabel);

        // Create the radio buttons and labels for 'Low', 'Medium', 'High'

        // Low Priority Radio Button and Label
        let lowPriorityInput = document.createElement("input");
        lowPriorityInput.type = "radio";
        lowPriorityInput.id = "priorityLow-project-todo";
        lowPriorityInput.name = "priority-todo-project";
        lowPriorityInput.value = "low";

        let lowPriorityLabel = document.createElement("label");
        lowPriorityLabel.setAttribute("for", "priorityLow-project-todo");
        lowPriorityLabel.textContent = "Low";

        // Medium Priority Radio Button and Label
        let medPriorityInput = document.createElement("input");
        medPriorityInput.type = "radio";
        medPriorityInput.id = "priorityMed-project-todo";
        medPriorityInput.name = "priority-todo-project";
        medPriorityInput.value = "medium";

        let medPriorityLabel = document.createElement("label");
        medPriorityLabel.setAttribute("for", "priorityMed-project-todo");
        medPriorityLabel.textContent = "Medium";

        // High Priority Radio Button and Label
        let highPriorityInput = document.createElement("input");
        highPriorityInput.type = "radio";
        highPriorityInput.id = "priorityHigh-project-todo";
        highPriorityInput.name = "priority-todo-project";
        highPriorityInput.value = "high";

        let highPriorityLabel = document.createElement("label");
        highPriorityLabel.setAttribute("for", "priorityHigh-project-todo");
        highPriorityLabel.textContent = "High";

        // Append radio buttons and labels to the priority div
        priorityDiv.appendChild(lowPriorityInput);
        priorityDiv.appendChild(lowPriorityLabel);
        priorityDiv.appendChild(medPriorityInput);
        priorityDiv.appendChild(medPriorityLabel);
        priorityDiv.appendChild(highPriorityInput);
        priorityDiv.appendChild(highPriorityLabel);

        // Create and append the button (confirm-project-todo-add)
        let confirmButton = document.createElement("button");
        confirmButton.id = "confirm-project-todo-add";
        confirmButton.textContent = "Add Project To Do";

        // Append the priority div and button to the last row div
        lastRowDiv.appendChild(priorityDiv);
        lastRowDiv.appendChild(confirmButton);

        // Append all elements to the form
        formElement.appendChild(chooseProjectDiv);
        formElement.appendChild(titleInput);
        formElement.appendChild(descriptionTextarea);
        formElement.appendChild(dueDateDiv);
        formElement.appendChild(lastRowDiv);


        confirmButton.addEventListener('click', (event)=> {

            console.log(selectElement.value);

            console.log("confirm todo project");
    
            event.preventDefault();
    
            //get data
            let title = titleInput.value;
            let description = descriptionTextarea.value;
            let dueDate = new Date(dueDateInput.value);
            let priority;
    
            const priorityInputs = document.getElementsByName("priority-todo-project");
    
            priorityInputs.forEach((radio) => {
                if (radio.checked) {
                    priority = radio.value;
                }
            });
            
            const projectName = selectElement.value;

            //new todo
            const newTodo = new ToDo(title, description, new Date(dueDate), priority);
    
            //add todo to the project

            //find project
            let count = 0;
            for (let projectInProjects of projects) {
                if (projectInProjects.name === projectName) {
                    console.log(count);
                    // return count; 
                    break;
                }
                count++;
            }

            projects[count].addTodo(newTodo);

            showProject(projects, todos);
            displayProjectUI(projects[count], projects, todos);
            
            //close dialog
            closeAddModal();
        });
    } else {
        // Create the input element for the to-do title
        let titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "title-project-add";
        titleInput.name = "title";
        // titleInput.placeholder = "Title:";
        titleInput.value = "No Project Detected (Please Make a New Project First)"
        titleInput.maxLength = 20;

        // Create the blank div (project-add-blank)
        let blankDiv = document.createElement("div");
        blankDiv.id = "project-add-blank";

        formElement.appendChild(titleInput);
        formElement.appendChild(blankDiv);
    }

    // Append the form to the container div
    projectTodoContainerDiv.appendChild(formElement);

    // Append the container div to the body (or any specific container)
    // document.body.appendChild(projectTodoContainerDiv);

    addContent.appendChild(projectTodoContainerDiv);
}