// /src/classes/Note.js
export default class Note {
    constructor(title, description="") {
        this._title = title;
        this._description = description;
    }

    set title(newTitle) {
        console.log("Setting title");
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    set description(newDescription) {
        console.log("Setting description");
        this._description = newDescription;
    }

    get description() {
        return this._description;
    }
}
