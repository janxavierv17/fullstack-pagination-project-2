
const perPage = 9;
let studentList = document.querySelector(".student-list");

// A function that will limit the number of students to display
let showPage = (arrayObjects, page) => {
  studentList.innerHTML = ""
  let startIndex = (page * perPage) - perPage;
  let endIndex = (page * perPage);
  studentList.innerHTML = "";

  // Loops over the list parameter (arrayObjects)
  for (let i = 0; i < arrayObjects.length; i++){
    if(i >= startIndex && i < endIndex){
      let items  = arrayObjects[i]

      // A template literal to easily create elements with datas from the data.js
      let html = ` 
      <li class="student-item cf">
      <div class="student-details">
      <img class="avatar" src="${items.picture.thumbnail}" alt="Profile Picture">
      <h3>${items.name.first} ${items.name.last}</h3>
      <span class="email">${items.email}</span>
      </div>
      <div class="joined-details">
      <span class="date">Joined ${items.registered.date}</span>
      </div>
      </li>` 
      studentList.insertAdjacentHTML("beforeend", html)
    }
  }
}

let ul = document.querySelector(".link-list")
let li = document.getElementsByTagName("li")

let addPagination = (list) => { // This function will create and display a number of buttons
  const numOfButton = Math.ceil(list.length / perPage);
  const ul = document.querySelector("ul.link-list");
  ul.innerHTML = '';
  for(let i = 1; i <= numOfButton; i++){
    let buttons = `<li><button type="button">${i}</li>`
    ul.insertAdjacentHTML("beforeend", buttons)
  }

  let firstButton = document.querySelector("button");
  firstButton.className = "active";

  // Bubbling, delegating the event listener to the parent tag element.
  ul.addEventListener("click", e =>{
     /* 
      Whenever the user clicks a button it adds active class 
      to it letting user know which page they're on. 
     */
    if(e.target.tagName === "BUTTON"){
      let buttonActive = document.querySelector(".active");
      buttonActive.className = ""
      e.target.className = "active"
      showPage(list, e.target.textContent)
    }
  })
  // console.log(firstButton)
}



// Call functions
showPage(data,1)
addPagination(data);
