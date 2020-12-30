/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const perPage = 9;
let studentList = document.querySelector(".student-list");

let showPage = (arrayObjects, page) => {
  studentList.innerHTML = ""
  let startIndex = (page * perPage) - perPage;
  let endIndex = (page * perPage);
  studentList.innerHTML = "";
  for (let i = 0; i < arrayObjects.length; i++){
    if(i >= startIndex && i < endIndex){
      let items  = arrayObjects[i]
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
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

let ul = document.querySelector(".link-list")
let li = document.getElementsByTagName("li")

let addPagination = (list) => {
  const numOfButton = Math.ceil(list.length / perPage);
  const ul = document.querySelector("ul.link-list");

  ul.innerHTML = '';
  for(let i = 1; i <= numOfButton; i++){
    let buttons = `<li><button type="button">${i}</li>`
    ul.insertAdjacentHTML("beforeend", buttons)
    // let li = document.createElement("li");
    // let button = document.createElement("button");
    // button.type = "button";
    // ul.append(li)
    // li.append(button)
    // button.textContent = i;
  }

  let firstButton = document.querySelector("button");
  firstButton.className = "active";

  // Bubbling, delegating the event listener to the parent tag element.
  ul.addEventListener("click", e =>{
    if(e.target.tagName === "BUTTON"){
      let buttonActive = document.querySelector(".active");
      buttonActive.className = ""
      e.target.className = "active"
      showPage(list, e.target.textContent)
    }
  })
  console.log(firstButton)
}



// Call functions
showPage(data,1)
addPagination(data);
