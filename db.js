let games = [
  { id: "1", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },
  { id: "2", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
  { id: "3", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "Mario Kart", platform: ["Switch"] },
  { id: "5", title: "Pokemon Scarlet", platform: ["PS5", "Xbox", "PC"] },
];

let authors = [
  { id: "1", name: "Mario", verified: true },
  { id: "2", name: "Yoshi", verified: false },
  { id: "3", name: "Peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "Odlična igra!", gameId: "1", authorId: "1" },
  { id: "2", rating: 8, content: "Dobra igra.", gameId: "2", authorId: "2" },
  { id: "3", rating: 6, content: "Prosječna.", gameId: "3", authorId: "3" },
  { id: "4", rating: 3, content: "Ništa posebno.", gameId: "4", authorId: "1" },
  { id: "5", rating: 1, content: "Najgora igra.", gameId: "5", authorId: "2" },
  { id: "6", rating: 7, content: "Zabavna igra.", gameId: "1", authorId: "3" },
  { id: "7", rating: 10, content: "Fantastična!", gameId: "2", authorId: "1" },
];

export default { games, authors, reviews };
