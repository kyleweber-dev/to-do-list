// Selectors
const inputText = document.querySelector(".inputText");
const inputSubmitBtn = document.querySelector(".inputSubmitBtn");
const listContainer = document.querySelector(".listContainer");

// Event Listeners
inputSubmitBtn.addEventListener("click", addTodo);
listContainer.addEventListener("click", handleItemClick); // Handles check & delete

function addTodo(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  if (inputText.value.trim() === "") return; // Stop empty tasks

  // Create a div container for the task
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("itemContainer");

  // Create the <li> element for the task text
  const newTodo = document.createElement("li");
  newTodo.classList.add("item");
  newTodo.innerText = inputText.value; // Set text to input value
  itemContainer.appendChild(newTodo);

  // Create the button container
  const itemBtnContainer = document.createElement("div");
  itemBtnContainer.classList.add("itemBtnContainer");

  // Create the check button
  const checkButton = document.createElement("button");
  checkButton.classList.add("itemBtnCheck");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  itemBtnContainer.appendChild(checkButton);

  // Create the trash button
  const trashButton = document.createElement("button");
  trashButton.classList.add("itemBtnTrash");
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  itemBtnContainer.appendChild(trashButton);

  // Append buttons to the item container
  itemContainer.appendChild(itemBtnContainer);

  // Add the new item to the list
  listContainer.appendChild(itemContainer);

  // Clear input field
  inputText.value = "";
}

function handleItemClick(event) {
  const item = event.target;

  // Check if the clicked element is a check button
  if (item.classList.contains("itemBtnCheck")) {
    const todoItem = item.parentElement.parentElement; // Get the main container
    todoItem.classList.toggle("itemContainerChecked"); // Toggle completed class
    todoItem.querySelector(".item").classList.toggle("itemChecked"); // Strike text
    item.classList.toggle("itemBtnCheckChecked"); // Change button color
  }

  // Check if the clicked element is a trash button
  if (item.classList.contains("itemBtnTrash")) {
    const todoItem = item.parentElement.parentElement;
    todoItem.classList.add("fade-out"); // Add fade-out effect
    todoItem.addEventListener("transitionend", () => {
      todoItem.remove(); // Remove item after animation
    });
  }
}
