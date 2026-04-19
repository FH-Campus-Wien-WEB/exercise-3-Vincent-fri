const movies = {
  tt001: {
    imdbID: "tt001",
    Title: "Star Wars: Episode III - Revenge of the Sith",
    Released: "2005-05-19",
    Runtime: 140,
    Genres: ["Action", "Adventure", "Fantasy"],
    Directors: ["George Lucas"],
    Writers: ["George Lucas"],
    Actors: ["Hayden Christensen", "Natalie Portman", "Ewan McGregor"],
    Plot: "As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new threat, while Anakin Skywalker is lured by Chancellor Palpatine into a sinister plot for galactic domination.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    Metascore: 68,
    imdbRating: 7.7
  },

  tt002: {
    imdbID: "tt002",
    Title: "The Dictator",
    Released: "2012-05-16",
    Runtime: 83,
    Genres: ["Comedy"],
    Directors: ["Larry Charles"],
    Writers: ["Sacha Baron Cohen", "Alec Berg", "David Mandel"],
    Actors: ["Sacha Baron Cohen", "Anna Faris", "John C. Reilly"],
    Plot: "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2IwMDM3ZmQtNjQ3NS00OTFiLWI5YzEtYWE3YjI5NTk3YzkwXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 58,
    imdbRating: 6.5
  },

  tt003: {
    imdbID: "tt003",
    Title: "Catch Me If You Can",
    Released: "2002-12-25",
    Runtime: 141,
    Genres: ["Biography", "Crime", "Drama"],
    Directors: ["Steven Spielberg"],
    Writers: ["Frank Abagnale Jr.", "Stan Redding", "Jeff Nathanson"],
    Actors: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"],
    Plot: "Barely 17 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
    Metascore: 75,
    imdbRating: 8.1
  },

  tt004: {
  imdbID: "tt004",
  Title: "Shrek",
  Released: "2001-05-18",
  Runtime: 90,
  Genres: ["Animation", "Adventure", "Comedy"],
  Directors: ["Andrew Adamson", "Vicky Jenson"],
  Writers: ["William Steig", "Ted Elliott", "Terry Rossio"],
  Actors: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
  Plot: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest to rescue a princess.",
  Poster: "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_SX300.jpg",
  Metascore: 84,
  imdbRating: 7.9
},

tt005: {
  imdbID: "tt005",
  Title: "The Wolf of Wall Street",
  Released: "2013-12-25",
  Runtime: 180,
  Genres: ["Biography", "Crime", "Drama"],
  Directors: ["Martin Scorsese"],
  Writers: ["Terence Winter"],
  Actors: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
  Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker to his fall involving crime and corruption.",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  Metascore: 75,
  imdbRating: 8.2
},

tt006: {
  imdbID: "tt006",
  Title: "The Gentlemen",
  Released: "2019-12-03",
  Runtime: 113,
  Genres: ["Action", "Crime"],
  Directors: ["Guy Ritchie"],
  Writers: ["Guy Ritchie"],
  Actors: ["Matthew McConaughey", "Charlie Hunnam", "Henry Golding"],
  Plot: "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots and schemes.",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjE2ZjQ4ZGMtZjFhMi00NmI5LTliNjEtODczMWMxNjliZjgxXkEyXkFqcGc@._V1_SX300.jpg",
  Metascore: 51,
  imdbRating: 7.8
}
}


module.exports = movies