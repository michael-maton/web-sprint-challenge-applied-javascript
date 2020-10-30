// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement("div");
    header.className = "header";
    let date = document.createElement("span");
    date.className = "date";
    let lambdaTimes = document.createElement("h1");
    let temp = document.createElement("span");
    temp.className = "temp";

    header.appendChild(date);
    header.appendChild(lambdaTimes);
    header.appendChild(temp);

    return header;
}

let headContainer = document.querySelector(".header-container");
headContainer.appendChild(Header());
