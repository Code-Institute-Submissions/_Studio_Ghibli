const urls = [];

window.addEventListener("DOMContentLoaded", async () => {
  const movieList = await axios.get("https://ghibliapi.herokuapp.com/films/");

  movieList.data.forEach((movie) => {
    document.getElementById("placeholder").innerHTML +=
      `<a class="film-url" href="javascript:populatemodal
        ('${movie.url}', '${movie.title.replace(/'/gi, "")}')">` +
      movie.title +
      "</a><br>";
  });
});

async function populatemodal(url, title) {
  // set the modal title
  $("#staticBackdropLabel").html(title);

  // Get the data from the selected URL
  const response = await axios.get(url);

  await buildView(response.data.people, "People");
  await buildView(response.data.species, "Species");
  await buildView(response.data.locations, "Locations");
  await buildView(response.data.vehicles, "Vehicles");

  // Show Modalspecies
  $("#staticBackdrop").modal("toggle");
}

async function buildView(array_data, header) {
  // Loop through the Urls and get an array of response
  const arrayOfPromises = array_data.map((url) => axios.get(url));

  // Loop through the response from the URL
  for await (let response of arrayOfPromises) {
    // $("#modalBody").text(JSON.stringify(response.data));
    // Write out the header and the json string of the response.
    $(
      `<h3>${header}</h3><p>${JSON.stringify(response.data).replace(
        /,/g, "<br>")}</p>`
    ).appendTo("#modalBody");
  }
}
