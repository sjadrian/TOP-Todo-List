
import { allButtons, allAddButtons } from "../data/store";

export function changeActiveTab(button) {
    // button.classList.add('active-tab');
    console.log("yow");

    // Loop through all buttons and remove 'active-tab' from each
    allButtons.get().forEach((button) => {
        button.classList.remove('active-tab');
    });

    // Add 'active-tab' to the clicked button only
    button.classList.add('active-tab');
}

export function changeActiveTabAdd(button) {
    // button.classList.add('active-tab');
    console.log("yow");

    // Loop through all buttons and remove 'active-tab' from each
    allAddButtons.forEach((button) => {
        button.classList.remove('active-tab');
    });

    // Add 'active-tab' to the clicked button only
    button.classList.add('active-tab');
}


