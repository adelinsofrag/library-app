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
    html += `
        <div class="card" style="width: 18rem;">
          ${drawIMG(element.cover_i)}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
past.addEventListener('click', addBookToRead())
function addBookToRead (event){
  event.preventDefault()
  addToList(read, bookID)
}

const presentBooks=document.getElementById("present")
present.addEventListener('click', addBookToCurrentlyReading())
function addBookToCurrentlyReading (event){
  event.preventDefault()
  addToList(reading, bookID)
}

const futureBooks=document.getElementById("future")
future.addEventListener('click', addBookToWantToRead())
function addBookToWantToRead(event){
  event.preventDefault()
  addToList(wantToRead, bookID)
}
//functia de adaugare carti in liste
const listType=["read","reading","wantToRead"]
function addToList (listType, bookID){
  if(listType!="read"||"reading"||"wantToRead"){
    alert("the list doesn't exist!")
  }else if(bookID){

  }else{
    let list = JSON.parse(localStorage.getItem("myBooks"))
    list[listType].push(bookID)
    localStorage.setItem("myBooks", JSON.stringify(list))
  }
}





  
  //obiectul care se va salva in local storage (obiect cu 3 array)
  let myBooks={
    "listaCartiCitite":[],
    "listaCartiInCurs":[],
    "listaCartiViitoare":[]
    }
  


    function getAllBooks(){
      document.getElementById("booksAlreadyRead").innerHTML=localStorage.getItem(myBooks.listaCartiCitite)
      document.getElementById("booksIReadNow").innerHTML=localStorage.getItem(myBooks.listaCartiInCurs)
      document.getElementById("booksIWantToRead").innerHTML=localStorage.getItem(myBooks.lisCartiCitite)


    }