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

let showPage = (arrayObjects) => {
   let studentList = document.querySelector(".student-list");

   let list = Object.keys(arrayObjects).map(item =>`
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${arrayObjects[item].picture.thumbnail}" alt="Profile Picture">
        <h3>${arrayObjects[item].name.first} ${arrayObjects[item].name.last}</h3>
        <span class="email">${arrayObjects[item].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${arrayObjects[item].registered.date}</span>
      </div>
    </li>
    `);

   let tag = studentList.innerHTML = list.join('');
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data);