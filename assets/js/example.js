let source = "https://openlibrary.org/search/authors.json?q=maxwell";
fetch(source)
  .then((x) => x.text())
  .then((y) => (document.getElementById("demo").innerHTML = y));

// rezultatul din cautare are deja propietatile pentru liste definite
  let book={
    //+ alte propietati care se vor afisa la cautare
    "amCitit":true||false,
    "citesc":true||false,
    "vreauSaCitesc":true||false
    }
  
    
  
  //obiectul care se va salva in local storage (obiect cu 3 array)
  let myBooks={
    "listaCartiCitite":[],
    "listaCartiInCurs":[],
    "listaCartiViitoare":[]
    }
  
//functia care se apeleaza la click
    element.addEventListener("click", addBooks);

    function addBooks(){
      if(book.amCitit===true){
        localStorage.setItem(myBooks.listaCartiCitite,book)
      }else if (book.citesc===true){
        localStorage.setItem(myBooks.listaCartiInCurs,book)
      }else {
        localStorage.setItem(myBooks.listaCartiViitoare,book)
      }
      
    }

    function getAllBooks(){
      document.getElementById("booksAlreadyRead").innerHTML=localStorage.getItem(myBooks.listaCartiCitite)
      document.getElementById("booksIReadNow").innerHTML=localStorage.getItem(myBooks.listaCartiInCurs)
      document.getElementById("booksIWantToRead").innerHTML=localStorage.getItem(myBooks.listaCartiViitoare)


    }