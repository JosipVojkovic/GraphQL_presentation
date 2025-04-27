import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games: () => db.games,
    game: (_, args) => db.games.find((game) => game.id === args.id),
    reviews: () => db.reviews,
    review: (_, { id }) => db.reviews.find((review) => review.id === id),
    authors: () => db.authors,
    author: (_, { id }) => db.authors.find((author) => author.id === id),
  },
  Game: {
    reviews: (game) => db.reviews.filter((review) => review.gameId === game.id),
  },
  Author: {
    reviews: (author) =>
      db.reviews.filter((review) => review.authorId === author.id),
  },
  Review: {
    author: (review) =>
      db.authors.find((author) => author.id === review.authorId),
    game: (review) => db.games.find((game) => game.id === review.gameId),
  },
  Mutation: {
    deleteGame: (_, { id }) => {
      db.games = db.games.filter((game) => game.id !== id);
      return db.games;
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server spreman na ${url}`);
