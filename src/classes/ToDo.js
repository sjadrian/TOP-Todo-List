// /src/classes/ToDo.js

import Note from './Note.js';

export default class ToDo extends Note {
    constructor(title, description, date, priority) {
        super(title, description);
        this._date = date;
        this._priority = priority;
        this._completed = false;
    }

    set date(newDate) {
        console.log("Setting date");
        this._date = newDate;
    }

    get date() {
        return this._date;
    }

    set priority(newPriority) {
        console.log("Setting priority");
        this._priority = newPriority;
    }

    get priority() {
        return this._priority;
    }

    set completed(value) {
        console.log("Setting completed");
        this._completed = value;
    }

    get completed() {
        return this._completed;
    }
}