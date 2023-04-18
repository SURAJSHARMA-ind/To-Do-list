const button = document.getElementById("btn");
const list = document.querySelector(".listcontainer");
const text = document.getElementById("add_text");

button.addEventListener("click", function() {
  if (text.value == "") {
    alert("Enter something to add in a list ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text.value;
    list.appendChild(li);

    // Add remove button
    let crsbtn = document.createElement("span");
    crsbtn.innerHTML = "X";
    li.appendChild(crsbtn);

    // Attach event listener to new li element
    li.addEventListener("click", function(a) {
      if (a.target == li) {
        li.classList.toggle("clicked");
      } else {
        li.remove();
      }
      savedata();
    });

    // Clear input field
    text.value = "";
    savedata();
  }
});

// Load saved data on page load
window.onload = function() {
  showdata();
};

// Save data to local storage
function savedata() {
  localStorage.setItem("listItems", list.innerHTML);
}

// Load data from local storage
function showdata() {
  if (localStorage.getItem("listItems")) {
    list.innerHTML = localStorage.getItem("listItems");
    // Attach event listeners to new li elements
    const lis = document.querySelectorAll("li");
    lis.forEach(function(checked) {
      checked.addEventListener("click", function(a) {
        if (a.target == checked) {
          checked.classList.toggle("clicked");
        } else {
          checked.remove();
        }
        savedata();
      });
    });
  }
}
