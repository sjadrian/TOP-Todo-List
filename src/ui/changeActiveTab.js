
export function changeActiveTab(button) {
    console.log("Changing active tab");

    // let buttons = loadAllButtons();
    // console.log(buttons);

    // Loop through all buttons and remove 'active-tab' from each
    allButtons.get().forEach((button_) => {
        console.log("XXXXX");
        console.log(button_);

        if (button_) { // Ensure the button is defined
            button_.classList.remove('active-tab');
        } else {
            console.warn("Encountered an undefined button.");
        }
    });

    // Add 'active-tab' to the clicked button only
    if (button) {
        button.classList.add('active-tab');
    } else {
        console.warn("Attempted to activate an undefined button.");
    }
}

export function changeActiveTabAdd(button) {
    console.log("Changing active add tab");

    // Loop through all add buttons and remove 'active-tab' from each
    allAddButtons.forEach((button_) => {
        if (button_) { // Ensure the button is defined
            button_.classList.remove('active-tab');
        } else {
            console.warn("Encountered an undefined button in allAddButtons.");
        }
    });

    // Add 'active-tab' to the clicked button only
    if (button) {
        button.classList.add('active-tab');
    } else {
        console.warn("Attempted to activate an undefined add button.");
    }
}
