// /src/classes/ToDo.js

import Note from './Note.js';

export default class ToDo extends Note {
    constructor(title, description, date, priority) {
        super(title, description);
        this.id = Date.now() + Math.random();
        this.date = new Date (date);
        this.priority = priority;
        this.completed=false;
    }

    static fromJSON(json) {
        const todo = new ToDo(json.title, json.description, json.date, json.priority, json.completed);
        todo.id = json.id;
        todo.completed = json.completed;
        return todo;
    }
}