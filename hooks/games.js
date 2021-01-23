import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://hemken.ddns.net:4000/graphql",
  cache: new InMemoryCache(),
});

export const GamesProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

const GAMES = gql`
  query Games {
    games {
      id
      name
      date
      players {
        score
        name
        color
      }
    }
  }
`;

export const useGames = () => useQuery(GAMES);

const DELETE_GAME = gql`
  mutation DeleteGame($id: ID!) {
    deleteGame(id: $id)
  }
`;

export const useDeleteGame = () =>
  useMutation(DELETE_GAME, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          games: (existing) => {},
        },
      });
    },
  });

const GAME = gql`
  query Game($id: ID!) {
    game(id: $id) {
      id
      name
      date
      players {
        name
        score
        color
      }
    }
  }
`;

export const useGame = (id) => useQuery(GAME, { variables: { id: id } });

const SAVE_GAME = gql`
  mutation SaveGame($name: String!, $players: [PlayerInput!]!) {
    saveGame(name: $name, players: $players) {
      id
    }
  }
`;

export const useSaveGame = () =>
  useMutation(SAVE_GAME, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          games: (existing) => {},
        },
      });
    },
  });
