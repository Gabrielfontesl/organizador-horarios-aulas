const dateInput = document.querySelector("#task-date");
const saveButton = document.querySelector(".task-form .primary-button");
const titleInput = document.querySelector("#task-title");

if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  dateInput.value = `${yyyy}-${mm}-${dd}`;
}

if (saveButton && titleInput) {
  saveButton.addEventListener("click", () => {
    const originalText = saveButton.textContent;
    const hasTitle = titleInput.value.trim().length > 0;

    saveButton.textContent = hasTitle ? "Tarefa salva" : "Informe um titulo";
    saveButton.classList.toggle("disabled", !hasTitle);

    window.setTimeout(() => {
      saveButton.textContent = originalText;
      saveButton.classList.remove("disabled");
    }, 1400);
  });
}
