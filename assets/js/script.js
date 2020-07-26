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

  let people = await buildView(response.data.people, "People");
  let species = await buildView(response.data.species, "Species");
  let locations = await buildView(response.data.locations, "Locations");
  let vehicles = await buildView(response.data.vehicles, "Vehicles");
  // Show Modalspecies
  document.getElementById("modalBody").innerHTML =
    people + species + locations + vehicles;
  $("#staticBackdrop").modal("toggle");
}

async function buildView(array_data, header) {
  // Loop through the Urls and get an array of response
  const arrayOfPromises = array_data.map((url) => axios.get(url));

  // Loop through the response from the URL
  for await (let response of arrayOfPromises) {
    // $("#modalBody").text(JSON.stringify(response.data));
    // Write out the header and the json string of the response.
    //$(`<h3>${header}</h3><p>${JSON.stringify(response.data).replace(/,/g, "<br>")}</p>`).appendTo("#modalBody");
    let htmlString = "";
    htmlString += `<h3>${header}</h3>`;

    for (let i = 0; i < response.data.length; i++) {
      if (header == "People") {
        htmlString +=
          `<p>${response.data[i].name}, ` +
          `${response.data[i].gender}, ` +
          `${response.data[i].age}.</p>`;
      } else if (header == "Species") {
        htmlString +=
          `<p>${response.data[i].name}, ` +
          `${response.data[i].classification}, ` +
          `${response.data[i].eye_colors}.</p>`;
      } else if (header == "Locations") {
        htmlString +=
          `<p>${response.data[i].name}, ` +
          `${response.data[i].climate}, ` +
          `${response.data[i].terrain}.</p>`;
      } else if (header == "Vehicles") {
        htmlString +=
          `<p>${response.data[i].name}, ` +
          `${response.data[i].description}, ` +
          `${response.data[i].vehicle_class}.</p>`;
      }
    }
    return htmlString;
  }
}
