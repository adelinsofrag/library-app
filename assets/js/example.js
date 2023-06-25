// let source = "https://openlibrary.org/search/authors.json?q=maxwell";
// Function to store and print the input value of the search box
function handleKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var inputElement = document.getElementById("inlineFormInputGroupUsername");
    var val = inputElement.value;
    console.log(val);

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
  let source = `https://openlibrary.org/search.json?q=${searchValue}`;
  fetch(source)
    .then((x) => x.json())
    .then((y) => handleData(y.docs));
}

function handleData(data) {
  let html = "";

  data.forEach((element) => {
    var bookID=element.key;
    var bookTitle=element.title;
    var bookAuthor=element.author_name;

  console.log(bookID)
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
      
      `;
  });
 
  
  return (document.getElementById("demo").innerHTML = html);
}

function drawIMG(input) {
  return `<img class="card-img-top" src="https://covers.openlibrary.org/b/id/${input}-M.jpg">`;
}
//declar cele 3 butoane la click

const pastBooks=document.getElementById("past")
past.addEventListener('click', addToList(read, bookID))


const presentBooks=document.getElementById("present")
present.addEventListener('click',addToList(reading, bookID))


const futureBooks=document.getElementById("future")
future.addEventListener('click',addToList(wantToRead, bookID))

//functia de adaugare carti in liste

const listType=["read","reading","wantToRead"]
let myBooksList = JSON.parse(localStorage.getItem("myBooks"))

function addToList (listType, bookID){
    myBooksList[listType].push(bookID)
    localStorage.setItem("myBooks", JSON.stringify(myBooksList))
  
}

  


    
    