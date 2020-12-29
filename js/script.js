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
const perPage = 10;
let studentList = document.querySelector(".student-list");


let showPage = (arrayObjects, page) => {
  let html;
  let startIndex = (page * perPage) - perPage;
  let endIndex = (page * perPage);
  for (let i = 0; i < arrayObjects.length; i++){
    if(i >= startIndex && i < endIndex){
      let items  = arrayObjects[i]
       html += `
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
      studentList.innerHTML = html;
    }
  
  }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data,1);
