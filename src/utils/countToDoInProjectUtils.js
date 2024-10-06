

export function updateTotalProjectCountUI(projects) {
    projects.forEach((project)=> {
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