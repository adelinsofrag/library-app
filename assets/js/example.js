// let source = "https://openlibrary.org/search/authors.json?q=maxwell";
// Function to store and print the input value of the search box
function handleKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var inputElement = document.getElementById("inlineFormInputGroupUsername");
    var val = inputElement.value;
    //console.log(val);

    handleAPIOnInputValue(val);
  }
}
// Call the function
var inputElement = document.getElementById("inlineFormInputGroupUsername");
inputElement.addEventListener("keydown", handleKey);

// Function to Handle API based on the search box input
function handleAPIOnInputValue(input) {
  // Store the search value and replace SPACES with "+" to pass into the API URL.
  let searchValue = input.replace(" ", "+");

  // Pass the searchValue into the API URL and display search results.
  const source = `https://openlibrary.org/search.json?q=${searchValue}`;
  fetch(source)
    .then((x) => x.json())
    .then((y) => handleData(y.docs));
}

function handleData(data) {
  let searchContainer = document.querySelector("#result-container");
  let html = "";

  data.forEach((element) => {
    //Am adaugat .slice(7) ca sa fie ID-ul mai scurt si mai exact, fara "/works/"
    var bookID = element.key.slice(7);
    var bookTitle = element.title;
    var bookAuthor = element.author_name;

    //aici se creaza div cards programatic pentru fiecare entry din JSON
    const card = document.createElement("div");
    card.classList.add("card");

    const bookCover = document.createElement("img");
    bookCover.classList.add("img");
    bookCover.src = `${drawIMG(element.cover_i)}`;
    console.log(element.cover_i);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = `${bookTitle}`;

    const cardAuthor = document.createElement("h6");
    cardAuthor.innerHTML = `${bookAuthor}`;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = `Book ID: ${bookID}`;

    // Am adaugat in HTML file un div mare cu clasa container
    // care va "tine" toate rezultatele din search

    // Aici "construim" card-ul prin alaturarea tag-urilor
    // secundare in card

    card.appendChild(bookCover);
    card.appendChild(cardBody);
    card.appendChild(cardAuthor);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    // Aici adaugam fiecare card la div-ul container si gata - avem un search result list
    searchContainer.appendChild(card);

    /*console.log(bookID);
    html += `
    
        <div class="card" style="width: 18rem;">
          ${drawIMG(element.cover_i)}
          <div class="card-body">
            <h5 class="card-title">${bookTitle}</h5>
            <h6>${bookAuthor}</h6>
            <p class="card-text">Book ID: ${bookID}</p>
            <div class="btn-group-vertical" role="group" aria-label="Basic outlined example">
              <button id="past" type="button" class="btn btn-outline-primary">I read</button>
              <button id="present" type="button" class="btn btn-outline-primary">I read now </button>
              <button id="future" type="button" class="btn btn-outline-primary">I want to read</button>
            </div>
          </div>
        </div>
      
      `;*/
  });
  return (document.getElementById("demo").innerHTML = html);
}

function drawIMG(input) {
  return `https://covers.openlibrary.org/b/id/${input}-M.jpg`;
}

//declar cele 3 butoane la click
var pastBooks = document.getElementById("past");
pastBooks.addEventListener("click", addToList(read, bookID));

var presentBooks = document.getElementById("present");
presentBooks.addEventListener("click", addToList(reading, bookID));

var futureBooks = document.getElementById("future");
futureBooks.addEventListener("click", addToList(wantToRead, bookID));

//functia de adaugare carti in liste

var listType = ["read", "reading", "wantToRead"];
var myBooksList = JSON.parse(localStorage.getItem("myBooks"));
console.log(myBooksList);

function addToList(listType, bookID) {
  myBooksList[listType].push(bookID);
  localStorage.setItem("myBooks", JSON.stringify(myBooksList));
}
