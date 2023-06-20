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
    .then((x) => x.text())
    .then((y) => (document.getElementById("demo").innerHTML = y));
}
