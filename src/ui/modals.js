// /src/ui/modals.js

const mainWindow = document.getElementById("main-content");
const addModal = document.getElementById("modal-add");
const detailModal = document.getElementById("modal");
const editModal = document.getElementById("modal-edit");

export function openDetailsModal() {
    detailModal.classList.add("open");
    mainWindow.classList.add("blur");
}

export function openEditModal() {
    editModal.classList.add("open");
    mainWindow.classList.add("blur");
}

export function openAddModal() {
    addModal.classList.add("open");
    mainWindow.classList.add("blur");
}

export function closeDetailsModal() {
    detailModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export function closeEditModal() {
    editModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}

export function closeAddModal() {
    addModal.classList.remove("open");
    mainWindow.classList.remove("blur");
}
