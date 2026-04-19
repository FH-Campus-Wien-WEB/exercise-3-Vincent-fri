import { ElementBuilder, ParentChildBuilder } from "./builders.js";

class ParagraphBuilder extends ParentChildBuilder {
  constructor() {
    super("p", "span");
  }
}

class ListBuilder extends ParentChildBuilder {
  constructor() {
    super("ul", "li");
  }
}

function formatRuntime(runtime) {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return hours + "h " + minutes + "m";
}

function appendMovie(movie, element) {
  new ElementBuilder("article").id(movie.imdbID)
          .append(new ElementBuilder("img").with("src", movie.Poster))
          .append(new ElementBuilder("h1").text(movie.Title))
          .append(new ElementBuilder("p")
              .append(new ElementBuilder("button").text("Edit")
                    .listener("click", () => location.href = "edit.html?imdbID=" + movie.imdbID)))
          .append(new ParagraphBuilder().items(
              "Runtime " + formatRuntime(movie.Runtime),
              "\u2022",
              "Released on " +
                new Date(movie.Released).toLocaleDateString("en-US")))
          .append(new ParagraphBuilder().childClass("genre").items(movie.Genres))
          .append(new ElementBuilder("p").text(movie.Plot))
          .append(new ElementBuilder("h2").pluralizedText("Director", movie.Directors))
          .append(new ListBuilder().items(movie.Directors))
          .append(new ElementBuilder("h2").pluralizedText("Writer", movie.Writers))
          .append(new ListBuilder().items(movie.Writers))
          .append(new ElementBuilder("h2").pluralizedText("Actor", movie.Actors))
          .append(new ListBuilder().items(movie.Actors))
          .appendTo(element);
}

function loadMovies(genre) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const mainElement = document.querySelector("main");

    while (mainElement.childElementCount > 0) {
      mainElement.firstChild.remove()
    }

    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText)
      for (const movie of movies) {
        const article = document.createElement('article')
        article.id = movie.imdbID
        
        // Poster
        const img = document.createElement('img')
        img.src = movie.Poster
        img.alt = movie.Title
        article.appendChild(img)
        
        // Titel
        const h1 = document.createElement('h1')
        h1.textContent = movie.Title
        article.appendChild(h1)
        
        // Genres
        const genreDiv = document.createElement('div')
        movie.Genres.forEach(function(genre) {
          const span = document.createElement('span')
          span.textContent = genre
          span.className = 'genre'
          genreDiv.appendChild(span)
        })
        article.appendChild(genreDiv)
        
        // Released
        const released = document.createElement('p')
        released.textContent = 'Released: ' + movie.Released
        article.appendChild(released)
        
        // Runtime
        const runtime = document.createElement('p')
        runtime.textContent = 'Runtime: ' + movie.Runtime + ' min'
        article.appendChild(runtime)
        
        // Directors
        const directors = document.createElement('p')
        directors.textContent = 'Directors: ' + movie.Directors.join(', ')
        article.appendChild(directors)
        
        // Writers
        const writers = document.createElement('p')
        writers.textContent = 'Writers: ' + movie.Writers.join(', ')
        article.appendChild(writers)
        
        // Actors
        const actors = document.createElement('p')
        actors.textContent = 'Actors: ' + movie.Actors.join(', ')
        article.appendChild(actors)
        
        // Plot
        const plot = document.createElement('p')
        plot.textContent = 'Plot: ' + movie.Plot
        article.appendChild(plot)
        
        // Ratings
        const metascore = document.createElement('p')
        metascore.textContent = 'Metascore: ' + movie.Metascore
        article.appendChild(metascore)
        
        const imdb = document.createElement('p')
        imdb.textContent = 'IMDb Rating: ' + movie.imdbRating
        article.appendChild(imdb)
        
        // Edit Button
        const button = document.createElement('button')
        button.textContent = 'Edit'
        button.onclick = function () {
          location.href = 'edit.html?imdbID=' + movie.imdbID
        }
        article.appendChild(button)
        
        
        mainElement.appendChild(article);
      }
      
    } else {
      mainElement.append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  }

  const url = new URL("/movies", location.href)
  if (genre) {
  url.searchParams.set("genre", genre);
}
  /* Task 1.4. Add query parameter to the url if a genre is given */

  xhr.open("GET", url)
  xhr.send()
}

window.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
   

    if (xhr.status === 200) {
      /* Task 1.3. Add the genre buttons to the listElement and 
         initialize them with a click handler that calls the 
         loadMovies(...) function above. */
      const genres = JSON.parse(xhr.responseText);
      const nav = document.querySelector("nav");

      nav.innerHTML = "<h2>Genres</h2>";

        //  button für All 
      const allButton = document.createElement("button");
      allButton.textContent = "All";
      allButton.onclick = () => loadMovies();
      nav.appendChild(allButton);

        // button für genre 
      genres.forEach(genre => {
      const btn = document.createElement("button");
      btn.textContent = genre;
      btn.onclick = () => loadMovies(genre);
      nav.appendChild(btn);
});


allButton.click();
  

  nav.querySelector("button").click();

      

      /* When a first button exists, we click it to load all movies. */
      const firstButton = document.querySelector("nav button");
      if (firstButton) {
        firstButton.click();
      }
    } else {
      document.querySelector("body").append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.open("GET", "/genres");
  xhr.send();
});
