import { allProjects } from "../data/store";

import { getAllProjects } from "../ui/project";

export function updateTotalProjectCountUI() {

    const updatedProjects = getAllProjects();  // <--- Ensures the updated data is used here

    updatedProjects.forEach((project)=> {
        // console.log('prj name:', project.name);
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