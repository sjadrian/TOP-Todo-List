import { allProjects } from "../data/store";

export function updateTotalProjectCountUI() {
    allProjects.get().forEach((project)=> {
        const projectCount = document.getElementById(project.name);

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
    });
}