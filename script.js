let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let resultsContainer = document.getElementById("resultsContainer");

function handleSearch() {
  const searchValue = searchInput.value;

  const queryUrl = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=zxWqSjuDGc3SGGkogZWTjA2QE1LVPxqL&limit=20&rating=pg`;

  fetch(queryUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayResults(data);
      console.log(data);
    });
}

function displayResults(results) {
  resultsContainer.innerHTML = "";
  let row;
  for (let i = 0; i < results.data.length; i++) {
    if (i % 3 === 0) {
      row = document.createElement("div");
      row.className = "row";
    }

    let column = document.createElement("div");
    column.className = "col-sm-4 mb-4";

    const element = results.data[i];
    console.log(i);
    console.log(column);

    let giphyImg = document.createElement("img");
    giphyImg.className = "giphyImg";
    giphyImg.src = element.images.fixed_width.url;

    column.append(giphyImg);
    row.append(column);

    if (i % 3 === 2 || i === results.data.length - 1) {
      resultsContainer.append(row);
    }
  }
}

searchBtn.addEventListener("click", handleSearch);
