// let source = "https://openlibrary.org/search/authors.json?q=maxwell";

let source = "https://openlibrary.org/search.json?q=rowling&mode=everything";
fetch(source)
  .then((x) => x.json())
  .then((y) => handleData(y.docs));


function handleData(data) {
  let html = "";

  data.forEach((element) => {
    html += `
        <div class="card" style="width: 18rem;">
          ${drawIMG(element.cover_i)}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `;
  });

  return (document.getElementById("demo").innerHTML = html);
}

function drawIMG(input) {
  return `<img class="card-img-top" src="https://covers.openlibrary.org/b/id/${input}-M.jpg">`;
}
