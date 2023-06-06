let source = "https://openlibrary.org/search/authors.json?q=maxwell";
fetch(source)
  .then((x) => x.text())
  .then((y) => (document.getElementById("demo").innerHTML = y));
