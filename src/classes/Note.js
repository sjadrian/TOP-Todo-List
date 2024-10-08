// /src/classes/Note.js
export default class Note {
    constructor(title, description="") {
        this.id = Date.now() + Math.random();
        this.title = title;
        this.description = description;
    }

    static fromJSON(json) {
        const note = new Note(json.title, json.description);
        note.id = json.id;
        return note;
    }
}