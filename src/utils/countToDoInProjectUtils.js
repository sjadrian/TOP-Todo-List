import { getAllProjects } from "../ui/showProject";

export function updateTotalProjectCountUI() {

    const updatedProjects = getAllProjects();

    updatedProjects.forEach((project)=> {
        const projectCount = document.getElementById(project.name);

        if (projectCount !== null) {
            let count = 0;
            project.todos.forEach(todo => {
                if (todo.completed == false) {
                    count++;
                }
            });
            
            if (count == 0) {
                projectCount.style.visibility = 'hidden';
            } else {
                projectCount.style.visibility = 'visible';
                projectCount.innerHTML = count;
            }
        }
    });
}