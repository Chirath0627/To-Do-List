const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something"); //alart in localhost to write something in empty field
  } else {
    let li = document.createElement("li"); //add something in empty field
    li.innerHTML = inputBox.value; //added text
    listContainer.appendChild(li); // display added li

    // close icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // add more li
  saveData(); // save data
}

//added item remove click
listContainer.addEventListener(
  "click", // check where we have click
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); //Check class name
      saveData(); // save data
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); //remove
      saveData(); // save data
    }
  },
  false
);

//store data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//display saved data when refrech or reopen browser
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
