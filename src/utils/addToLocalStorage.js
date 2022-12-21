export function addToLocalStorage(arr) {
    localStorage.setItem('items', JSON.stringify(arr));
}

export function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('items'));
}
