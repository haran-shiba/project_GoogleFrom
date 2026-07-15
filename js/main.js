const searchForm = document.getElementById('search-form');
const addShortcutBtn = document.getElementById('add-shortcut-btn');
const shortcutModal = document.getElementById('shortcut-modal');
const cancelBtn = document.getElementById('cancel-btn');
const doneBtn = document.getElementById('done-btn');
const nameInput = document.getElementById('shortcut-name-input');
const urlInput = document.getElementById('shortcut-url-input');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = '404.html';
});

function openModal() {
    shortcutModal.classList.remove('hidden');
}

function closeModal() {
    shortcutModal.classList.add('hidden');
    nameInput.value = '';
    urlInput.value = '';
    doneBtn.disabled = true;
}

function updateDoneButton() {
    doneBtn.disabled = nameInput.value.trim() === '' || urlInput.value.trim() === '';
}

addShortcutBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
doneBtn.addEventListener('click', closeModal);
nameInput.addEventListener('input', updateDoneButton);
urlInput.addEventListener('input', updateDoneButton);
